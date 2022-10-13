import { Vue, Component } from 'vue-property-decorator';

import './PageNotFound.scss';

@Component({
  name: 'page-not-found',
})
export default class PageNotFound extends Vue {
  protected render() {
    return (
      <div>
        <div class="wscn-http404">
          <div class="bullshit">
            <div class="bullshit__oops">NOT FOUND!</div>
            <div class="bullshit__headline">This page is not found...</div>
            <div class="bullshit__info">
              Please check that the URL you entered is correct. Please click the button below to return to the homepage
              or send an error report.
            </div>
            <a on-click={this.back} class="bullshit__return-home">Go back</a>
          </div>
        </div>
      </div>
    );
  }

  private back() {
    if (this.$route.query.noGoBack) {
      this.$router.push({ path: '/' });
    } else {
      this.$router.go(-1);
    }
  }
}
