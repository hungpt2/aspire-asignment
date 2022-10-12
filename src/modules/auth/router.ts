import { RouteConfig } from 'vue-router';
import getComponent from '@/shared/helpers/lazyImport/getComponent';

const authRoutes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: getComponent('auth/login/Login'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: getComponent('auth/forgotPassword/ForgotPassword'),
  },
];

export default authRoutes;
