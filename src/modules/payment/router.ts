import { RouteConfig } from 'vue-router';
import getComponent from '@/shared/helpers/lazyImport/getComponent';
import BaseLayout from '@/layouts/base/BaseLayout';

const paymentRoutes: RouteConfig[] = [
  {
    path: '/payments',
    component: BaseLayout,
    children: [
      {
        path: '',
        name: 'PAYMENTS',
        component: getComponent('payment/index'),
      },
    ],
  },
];
export default paymentRoutes;
