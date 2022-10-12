import { Vue, Component } from 'vue-property-decorator';
import { Form } from 'ant-design-vue';

import './ForgotPassword.scss';

@Component({
  name: 'forgot-password',
  props: {
    Form,
  },
})
class ForgotPassword extends Vue {
  protected render() {
    const { getFieldDecorator } = this.Form;
    return (
      <div class="forgot-password-container">
        <img src={require('@/assets/img/logo2.png')}/>
        <a-card-custom>
          <h1>Forgot Password</h1>
          <a-form on-submit={this.onFormSubmit} layout="vertical">
            <a-form-item
              type="flex"
              label="We will send you the address to reset your password."
            >
              {
                getFieldDecorator('email', {
                  rules: [
                    { required: true, message: this.$t('ERROR.REQUIRED') as string },
                  ],
                })(<a-input
                  id="email"
                  prefix-icon="iconfont-mail"
                  placeholder={this.$t('COMMON.EMAIL')}
                >
                  <a-icon slot="prefix" type="mail"/>
                </a-input>)
              }
            </a-form-item>

            <div style="text-align: center">
              <a-button
                loading={this.$store.getters.auth.isLoginRequesting}
                htmlType="submit"
                type="primary"
                on-click={this.onFormSubmit}
              >{this.$t('COMMON.SUBMIT')}</a-button>
            </div>
          </a-form>
        </a-card-custom>
      </div>
    );
  }

  private onFormSubmit(e: any) {
    e.preventDefault();
    this.Form.validateFields((error: any) => {
      if (!error) {
        this.$router.push('/login');
        return true;
      }
      return false;
    });
  }
}

export default Form.create({})(ForgotPassword);
