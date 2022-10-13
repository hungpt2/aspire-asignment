import { RouteConfig } from 'vue-router';
import getComponent from '@/shared/helpers/lazyImport/getComponent';
import BaseLayout from '@/layouts/base/BaseLayout';

const profileRoutes: RouteConfig[] = [
  {
    path: '/payments',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'PROFILE',
        component: getComponent('profile/index'),
      },
    ],
  },
];
export default profileRoutes;
