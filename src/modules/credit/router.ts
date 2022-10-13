import { RouteConfig } from 'vue-router';
import getComponent from '@/shared/helpers/lazyImport/getComponent';
import BaseLayout from '@/layouts/base/BaseLayout';

const creditRoutes: RouteConfig[] = [
  {
    path: '/credit',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'CREDIT',
        component: getComponent('credit/index'),
      },
    ],
  },
];
export default creditRoutes;
