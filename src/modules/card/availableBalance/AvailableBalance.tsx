import PlusCircleIcon from '@/assets/icons/PlusCircle';
import { IAvailableBalance } from '@/shared/models';
import { IAppState } from '@/store/models';
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import './AvailableBalance.scss';

@Component({
  name: 'available-balance',
  components: {
    'plus-circle-icon': PlusCircleIcon,
  },
})
export default class AvailableBalance extends Vue {

  @State((state: IAppState) => state.common.availableBalance)
  private availableBalance!: IAvailableBalance;

  protected mounted() {
    this.$store.dispatch('getAvailableBalance');
  }

  protected render() {
    return (
      <div class="available-balance">
        <div class="available-balance--label">
          Account Balance
        </div>
        <div class="available-balance__info">
          <div class="available-balance__info__value">
            <div class="available-balance__info--currency">
              { this.availableBalance.currency }
            </div>
            <div class="available-balance__info--amount">
              { this.availableBalance.balance }
            </div>
          </div>
          <button
            class="available-balance__action aspire-btn aspire-btn--primary"
            on-click={() => { this.onNewCard(); }}
          >
            <plus-circle-icon class="aspire-btn--icon" />
            <span>New card</span>
          </button>
        </div>
      </div>
    );
  }

  private onNewCard(): void {
    console.log('onNewCard');
  }
}
