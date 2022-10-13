import { Vue, Component } from 'vue-property-decorator';
import AvailableBalance from './availableBalance/AvailableBalance';
import CardTabs from './cardTabs/CardTabs';

@Component({
  name: 'card-container',
  components: {
    'available-balance': AvailableBalance,
    'card-tabs': CardTabs,
  },
})
export default class CardContainer extends Vue {

  protected render() {
    return (
      <div>
        <available-balance />
        <card-tabs />
        <router-view />
      </div>
    );
  }
}
