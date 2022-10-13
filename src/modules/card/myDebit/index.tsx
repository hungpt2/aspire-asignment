import { Vue, Component } from 'vue-property-decorator';
import CardActions from './cardActions';
import CardDetails from './cardDetails';
import CardPreview from './cardPreview';
import RecentTransactions from './recentTransactions';
import './index.scss';

@Component({
  name: 'my-debit-cards',
  components: {
    'card-preview': CardPreview,
    'card-actions': CardActions,
    'card-details': CardDetails,
    'recent-transactions': RecentTransactions,
  },
})
export default class MyDebitCards extends Vue {

  protected render() {
    return (
      <div class="my-debit-cards">
        <div class="my-debit-cards__card-actions">
          <card-preview />
          <card-actions />
        </div>
        <div class="my-debit-cards__card-info">
          <card-details />
          <recent-transactions />
        </div>
      </div>
    );
  }
}
