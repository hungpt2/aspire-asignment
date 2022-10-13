import { get } from 'lodash';
import { Vue, Component, Watch } from 'vue-property-decorator';
import './CardTabs.scss';

@Component({
  name: 'card-tabs',
})
export default class CardTabs extends Vue {

  private activeWidth = 0;
  private activeLeft = 0;
  private mapping: any = {
    'CARD.MY-DEBIT-CARDS': 'myDebit',
    'CARD.ALL-COMPANY-CARDS': 'company',
  };

  @Watch('$route')
  protected routeChanged() {
    this.calculateActiveBar();
  }

  protected mounted() {
    window.addEventListener('resize', this.calculateActiveBar);
    setTimeout(() => {
      this.calculateActiveBar();
    }, 300);
  }

  protected destroyed() {
    window.removeEventListener('resize', this.calculateActiveBar);
  }


  protected render() {
    return (
      <div class="card-tabs">
        <div class="card-tabs__wrapper">
          <div
            class="card-tabs--active"
            style={`width: ${this.activeWidth}px;left:${this.activeLeft}px`}
          />
          <div
            ref="myDebit"
            class={[
              'card-tabs__item',
              this.$route.name === 'CARD.MY-DEBIT-CARDS' ? 'active' : '',
            ]}
            on-click={() => { this.goTo('CARD.MY-DEBIT-CARDS'); }}
          >
            My debit cards
          </div>
          <div
            ref="company"
            class={[
              'card-tabs__item',
              this.$route.name === 'CARD.ALL-COMPANY-CARDS' ? 'active' : '',
            ]}
            on-click={() => { this.goTo('CARD.ALL-COMPANY-CARDS'); }}
          >
            All company cards
          </div>
        </div>
      </div>
    );
  }

  private goTo(name: string): void {
    this.$router.push({
      name,
    });
  }

  private calculateActiveBar(): void {
    this.$nextTick(() => {
      this.activeWidth = get(this.$refs[this.mapping[this.$route.name || 'CARD.MY-DEBIT-CARDS']], 'clientWidth');
      this.activeLeft = get(this.$refs[this.mapping[this.$route.name || 'CARD.MY-DEBIT-CARDS']], 'offsetLeft');
    });
  }
}
