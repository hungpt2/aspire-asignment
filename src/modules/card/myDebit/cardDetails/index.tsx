import CollapseContainer from '@/components/Collapse/Collapse';
import CardDetailIcon from '@/assets/icons/CardDetail';
import ArrowCircleIcon from '@/assets/icons/ArrowCircle';
import { Vue, Component } from 'vue-property-decorator';
import './index.scss';

@Component({
  name: 'card-details',
  components: {
    CollapseContainer,
    CardDetailIcon,
    ArrowCircleIcon,
  },
})
export default class CardDetails extends Vue {

  private isShow = false;

  protected render() {
    return (
      <div class="card-details">
        <collapse-container initValue={this.isShow} on-changed={ (value: boolean) => { this.isShow = value; } }>
          <div class="card-details__head">
            <div class="card-details__head-content">
              <card-detail-icon class="card-details__head-content--icon" />
              <div class="card-details__head-content--label">Card Details</div>
            </div>
            <arrow-circle-icon class={[
              'card-details__head-content--icon-action',
              this.isShow ? 'rotate' : '',
            ]} />
          </div>
          <div slot="expand" class="card-details__expand">
            No Data
          </div>
        </collapse-container>
      </div>
    );
  }
}
