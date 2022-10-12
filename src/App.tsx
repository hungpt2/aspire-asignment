import { Vue, Component } from 'vue-property-decorator';

import './App.scss';

@Component({
  name: 'app',
  components: {
  },
})
export default class App extends Vue {
  protected render() {
    const { isUserLoggedIn } = this.$store.getters.auth;
    return (
      <div class={{ wrapper: true, ['full-page']: !isUserLoggedIn }}>
        {isUserLoggedIn ? <app-sidebar/> : (
          <div class="overlay">
            <div class="bg-footer"></div>
          </div>
        )}
        <div class="main-content">
          {isUserLoggedIn && <app-header/>}
          {this.renderRouterView()}
        </div>
      </div>
    );
  }

  private renderRouterView() {
    const { isUserLoggedIn } = this.$store.getters.auth;
    return isUserLoggedIn ? (
      <div class="container">
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
        <footer class="text-right">
          <em>
            {process.env.VUE_APP_BUILD_NUMBER}
          </em>
        </footer>
      </div>
    ) : <router-view/>;
  }
}
