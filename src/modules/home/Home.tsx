import { Vue, Component } from 'vue-property-decorator';
import { HelloWorld } from '@/components';

import { updateLocale, getCurrentLocale } from '@/service/i18n';

@Component({
  name: 'home-module',
  components: {
    'hello-world': HelloWorld,
  },
})
export default class Home extends Vue {
  protected render() {
    return (
      <a-card-custom>
        <div class="home" style="text-align: center">
          <img alt="Vue logo" src={require('@/assets/logo.png')}/>
          <a-button on-click={() => this.changeLanguage()}>Change Language</a-button>
          <h1>{this.$t('COMMON.HELLO')}</h1>
          <hello-world msg="Welcome to Your Vue.js + TypeScript App"/>
        </div>
      </a-card-custom>
    );
  }

  private changeLanguage() {
    updateLocale(getCurrentLocale() === 'cn' ? 'en' : 'cn');
  }
}
