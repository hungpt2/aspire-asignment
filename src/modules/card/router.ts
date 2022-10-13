import { RouteConfig } from 'vue-router';
import getComponent from '@/shared/helpers/lazyImport/getComponent';
import BaseLayout from '@/layouts/base/BaseLayout';

const cardRoutes: RouteConfig[] = [
  {
    path: '/cards',
    component: BaseLayout,
    children: [
      {
        path: '',
        redirect: {
          name: 'CARD.MY-DEBIT-CARDS',
        },
        component: getComponent('card/index'),
        children: [
          {
            path: 'my-debit',
            name: 'CARD.MY-DEBIT-CARDS',
            component: getComponent('card/myDebit/index'),
          },
          {
            path: 'company',
            name: 'CARD.ALL-COMPANY-CARDS',
            component: getComponent('card/company/index'),
          },
        ],
      },
    ],
  },
];
export default cardRoutes;
