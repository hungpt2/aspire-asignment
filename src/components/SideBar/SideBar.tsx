import CardIcon from '@/assets/icons/Card';
import HomeIcon from '@/assets/icons/Home';
import CreditIcon from '@/assets/icons/Credit';
import PaymentIcon from '@/assets/icons/Payment';
import ProfileIcon from '@/assets/icons/Profile';
import { SideBarItem } from '@/shared/models/sidebar';
import { Vue, Component } from 'vue-property-decorator';

import './SideBar.scss';
import CompanyInfo from '../CompanyInfo/CompanyInfo';

@Component({
  name: 'side-bar',
  components: {
    CompanyInfo,
    'home-icon': HomeIcon,
    'card-icon': CardIcon,
    'payment-icon': PaymentIcon,
    'credit-icon': CreditIcon,
    'profile-icon': ProfileIcon,
  },
})
export default class SideBar extends Vue {

  private listFeature: SideBarItem[] = [
    {
      label: 'Home',
      icon: 'home',
      routeName: 'HOME',
      activeRoute: 'HOME',
    },
    {
      label: 'Cards',
      icon: 'card',
      routeName: 'CARD.MY-DEBIT-CARDS',
      activeRoute: 'CARD',
    },
    {
      label: 'Payments',
      icon: 'payment',
      routeName: 'PAYMENTS',
      activeRoute: 'PAYMENTS',
    },
    {
      label: 'Credit',
      icon: 'credit',
      routeName: 'CREDIT',
      activeRoute: 'CREDIT',
    },
    {
      label: 'Profile',
      icon: 'profile',
      routeName: 'PROFILE',
      activeRoute: 'PROFILE',
    },
  ];

  protected render() {
    const listIcons: Record<string, JSX.Element> = {
      profile: <ProfileIcon />,
      credit: <CreditIcon />,
      payment: <PaymentIcon />,
      card: <CardIcon />,
      home: <HomeIcon />,
    };
    return (
      <div class="side-bar">
        <company-info />
        {
          this.listFeature.map((feature, idx) => {
            return (
              <div
                class={[
                  'side-bar__item',
                  this.$route.name && this.$route.name.includes(feature.activeRoute) ? 'active' : '',
                ]}
                key={idx}
                on-click={() => { this.goTo(feature.routeName); }}
              >
                <div class="side-bar__item--content">
                  <div class="side-bar__item--icon">
                    { listIcons[feature.icon] }
                  </div>
                  <div class="side-bar__item--label">
                    {feature.label}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  private goTo(name: string): void {
    this.$router.push({
      name,
    });
  }
}
