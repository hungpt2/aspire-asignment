import { Vue, Component } from 'vue-property-decorator';
import SideBar from '@/components/SideBar/SideBar';

import './BaseLayout.scss';

@Component({
  name: 'base-layout',
  components: {
    SideBar,
  },
})
export default class BaseLayout extends Vue {
  protected render() {
    return (
      <div class="base-layout">
        <div class="base-layout__sidebar">
          <side-bar />
        </div>
        <div class="base-layout__wrapper">
          <router-view />
        </div>
      </div>
    );
  }
}
