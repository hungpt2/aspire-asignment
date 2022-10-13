import DeActiveCardIcon from '@/assets/icons/DeactiveCard';
import FreezeCardIcon from '@/assets/icons/FreezeCard';
import GpayCardIcon from '@/assets/icons/GpayCard';
import LimitCardIcon from '@/assets/icons/LimitCard';
import ReplaceCardIcon from '@/assets/icons/ReplaceCard';
import { Vue, Component } from 'vue-property-decorator';
import './index.scss';

@Component({
  name: 'card-actions',
  components: {
    FreezeCardIcon,
    LimitCardIcon,
    GpayCardIcon,
    ReplaceCardIcon,
    DeActiveCardIcon,
  },
})
export default class CardActions extends Vue {

  private listActions = [
    {
      id: 1,
      label: 'Freeze card',
      icon: 'freeze',
    },
    {
      id: 2,
      label: 'Set spend limit',
      icon: 'limit',
    },
    {
      id: 3,
      label: 'Add to GPay',
      icon: 'gpay',
    },
    {
      id: 4,
      label: 'Replace card',
      icon: 'replace',
    },
    {
      id: 5,
      label: 'Cancel card',
      icon: 'cancel',
    },
  ];

  protected render() {
    const listIcons: Record<string, JSX.Element> = {
      freeze: <FreezeCardIcon />,
      limit: <LimitCardIcon />,
      gpay: <GpayCardIcon />,
      replace: <ReplaceCardIcon />,
      cancel: <DeActiveCardIcon />,
    };
    return (
      <div class="card-actions">
        {
          this.listActions.map((action, idx) => {
            return (
              <div class="card-actions__item">
                <div class="card-actions__item--icon">
                  {listIcons[action.icon]}
                </div>
                <div class="card-actions__item--label">
                  {action.label}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
