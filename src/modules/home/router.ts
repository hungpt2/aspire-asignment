import { RouteConfig } from 'vue-router';
import getComponent from '@/shared/helpers/lazyImport/getComponent';
import BaseLayout from '@/layouts/base/BaseLayout';

const homeRoutes: RouteConfig[] = [
  {
    path: '/home',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'HOME',
        component: getComponent('home/index'),
      },
    ],
  },
];
export default homeRoutes;
