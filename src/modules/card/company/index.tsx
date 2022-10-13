import { Vue, Component } from 'vue-property-decorator';
import './index.scss';

@Component({
  name: 'all-company-cards',
  components: {
  },
})
export default class AllCompanyCards extends Vue {
  protected render() {
    return (
      <div class="all-company-cards">
        all company cards
      </div>
    );
  }
}
