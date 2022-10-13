import CollapseContainer from '@/components/Collapse/Collapse';
import RecentTransactionIcon from '@/assets/icons/RecentTransaction';
import ArrowCircleIcon from '@/assets/icons/ArrowCircle';
import { Vue, Component } from 'vue-property-decorator';
import './index.scss';
import TransactionItem from './transactionItem';
import { ITransaction } from '@/shared/models/transaction';
import { State } from 'vuex-class';
import { IAppState } from '@/store/models';

@Component({
  name: 'recent-transactions',
  components: {
    CollapseContainer,
    RecentTransactionIcon,
    ArrowCircleIcon,
    TransactionItem,
  },
})
export default class RecentTransactions extends Vue {

  @State((state: IAppState) => state.common.listTransaction)
  private readonly listTransaction!: ITransaction[];

  private isShow = false;

  protected async mounted() {
    await this.$store.dispatch('getListTransaction');
    (this.$refs.collapse as CollapseContainer).onToggle();
  }

  protected render() {
    return (
      <div class="recent-transaction-container">
        <div class="recent-transaction">
          {
            this.listTransaction ?
              <collapse-container ref="collapse" on-changed={ (value: boolean) => { this.isShow = value; } }>
                <div class="recent-transaction__head">
                  <div class="recent-transaction__head-content">
                    <recent-transaction-icon class="recent-transaction__head-content--icon" />
                    <div class="recent-transaction__head-content--label">Recent Transactions</div>
                  </div>
                  <arrow-circle-icon class={[
                    'recent-transaction__head-content--icon-action',
                    this.isShow ? 'rotate' : '',
                  ]} />
                </div>
                <div slot="expand" class="recent-transaction__expand">
                  {
                    this.listTransaction.map((transaction) => {
                      return (
                        <transaction-item data={transaction} />
                      );
                    })
                  }
                </div>
              </collapse-container>
              : ''
          }
        </div>
        {
          this.isShow ?
            <div class="recent-transaction__view-all">
              <div>View all card transactions</div>
            </div>
            : ''
        }
      </div>
    );
  }
}
