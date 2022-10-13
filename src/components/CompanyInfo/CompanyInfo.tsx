import LogoIcon from '@/assets/icons/Logo';
import LogoMiniIcon from '@/assets/icons/LogoMini';
import { Vue, Component } from 'vue-property-decorator';
import './CompanyInfo.scss';

@Component({
  name: 'CompanyInfo',
  components: {
    'logo': LogoIcon,
    'logo-mini': LogoMiniIcon,
  },
})
export default class CompanyInfo extends Vue {
  protected render() {
    return (
      <div class="company-info">
        <logo class="logo" />
        <logo-mini class="logo-mini" />
        <div class="company-info--description">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>
      </div>
    );
  }
}
