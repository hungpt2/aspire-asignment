import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
// import authRoutes from '@/modules/auth/router';

Vue.use(Router);

const lazyRoutes: RouteConfig[] = [
  // ...authRoutes,
];

const rootRoutes: RouteConfig[] = [
  ...lazyRoutes,
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () =>
  //     import(/* webpackChunkName: 'about' */ '@/modules/about/About'),
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () =>
  //     import(/* webpackChunkName: 'home' */ '@/modules/home/Home'),
  // },
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
  mode: 'hash',
});
