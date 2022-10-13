import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import cardRoutes from '@/modules/card/router';
import homeRoutes from '@/modules/home/router';
import paymentRoutes from '@/modules/payment/router';
import creditRoutes from '@/modules/credit/router';
import profileRoutes from '@/modules/profile/router';

Vue.use(Router);

const lazyRoutes: RouteConfig[] = [
  ...profileRoutes,
  ...creditRoutes,
  ...paymentRoutes,
  ...homeRoutes,
  ...cardRoutes,
];

const rootRoutes: RouteConfig[] = [
  ...lazyRoutes,
  {
    path: '/',
    redirect: '/cards',
  },
  {
    path: '**',
    name: '404',
    component: () =>
      import(/* webpackChunkName: '404' */ '@/components/PageNotFound/PageNotFound'),
  },
];

export const router = new Router({
  routes: rootRoutes,
  mode: 'history',
});
