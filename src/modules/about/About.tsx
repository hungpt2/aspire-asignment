import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'about-module',
})
export default class About extends Vue {
  private isLoading: boolean = true;

  protected mounted() {
    setTimeout(() => this.isLoading = false, 1500);
  }

  protected render() {
    return (
      <a-card-custom loading={this.isLoading}>
        <div className="about">
          <h1>Click the Button to view the magic</h1>
          <a-button on-click={() => this.onBtnClick('info')}>Info button</a-button>
          <a-button on-click={() => this.onBtnClick('error')}>Error button</a-button>
          <a-button on-click={() => this.onBtnClick('success')}>Success button</a-button>
        </div>
      </a-card-custom>
    );
  }

  private onBtnClick(type: string) {
    // @ts-ignore
    this.$message[type]('Hello World');
  }
}
