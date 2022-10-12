import { Component, Mixins } from 'vue-property-decorator';
import { Form } from 'ant-design-vue';

import './Login.scss';
import { mapState } from 'vuex';
import { IAppState } from '@/store/models';
import TwoFactorAuthDialog from '@/modules/shared/components/TwoFactorAuthDialog/TwoFactorAuthDialog';
import { ITwoFactorAuthDialogData } from '@/modules/shared/components/TwoFactorAuthDialog/TwoFactorAuthForm';
import { HasModalMixin } from '@/shared/mixins/HasModalMixin';

@Component({
  name: 'app-login',
  props: {
    Form,
  },
  components: {
    TwoFactorAuthDialog,
  },
  computed: {
    ...mapState({
      isLoginRequesting: (state: IAppState) => state.auth.isLoginRequesting,
    }),
  },
})
class Login extends Mixins<HasModalMixin>(HasModalMixin) {

  private isLoginRequesting!: boolean;

  protected render() {
    const {
      Form: { getFieldDecorator },
    } = this;
    return (
      <div class="login-container">
        <two-factor-auth-dialog ref="two-factor-auth-dialog" />
        <img src={require('@/assets/img/logo2.png')}/>
        <a-card-custom>
          <h1>Login</h1>
          <a-form on-submit={this.onFormSubmit} layout="vertical">
            <a-form-item type="flex">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: this.$t('ERROR.REQUIRED') as string,
                  },
                ],
              })(
                <a-input
                  id="email"
                  prefix-icon="iconfont-user"
                  placeholder={this.$t('COMMON.EMAIL')}
                >
                  <a-icon slot="prefix" type="user" />
                </a-input>,
              )}
            </a-form-item>

            <a-form-item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: this.$t('ERROR.REQUIRED') as string,
                  },
                ],
              })(
                <a-input
                  id="password"
                  prefix-icon="iconfont-lock"
                  type="password"
                  placeholder={this.$t('INPUT-FIELD.PASSWORD')}
                >
                  <a-icon slot="prefix" type="lock" />
                </a-input>,
              )}
            </a-form-item>
            <a-form-item>
            <div class="forgot-password-text">
              <router-link to="/forgot-password">
                {this.$t('COMMON.FORGOT-PASSWORD')}
              </router-link>
            </div>
            </a-form-item>
            <div style="text-align: center">
              <a-button
                loading={this.isLoginRequesting}
                htmlType="submit"
                type="primary"
                on-click={this.onFormSubmit}
              >
                {this.$t('COMMON.LOGIN')}
              </a-button>
            </div>
          </a-form>
        </a-card-custom>
      </div>
    );
  }

  private onFormSubmit(e: any) {
    e.preventDefault();
    this.Form.validateFields(async (error: any, value: any) => {
      if (!error) {
        const provider = await this.$store.dispatch('login', value);
        if (provider === 'googleAuthenticator') {
          this.openRef<ITwoFactorAuthDialogData>('two-factor-auth-dialog', {
            type: 'login',
            ...value,
            callback: code => this.$store.dispatch('login', { ...value, code }),
          });
        }
      }
    });
  }
}

export default Form.create({})(Login);
