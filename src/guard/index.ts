import { router } from '@/router';
import store from '@/store/store';
import { Route } from 'vue-router';
import { getAuthenticationStorageInfo } from '@/service/storage';
import { connectSocket } from '@/service/socket';
import { connectPriceSocket } from '../service/socket/index';

const publicRoute: string[] = ['/login', '/forgot-password'];

router.beforeEach(async (to: Route, from: Route, next) => {
  !store.state.socket.isConnected && connectPriceSocket();
  const isClientHasToken: boolean = !!getAuthenticationStorageInfo();

  if (isClientHasToken && !store.state.user.profile) {
    await store.dispatch('getUserProfile');
  }

  if (isClientHasToken && !(publicRoute.includes(from.path)) && !store.state.socket.isConnected) {
    connectSocket();
  }

  if (store.state.user.profile) {
    if (publicRoute.includes(to.path)) {
      next({ path: from.fullPath });
    } else {
      next();
    }
  } else {
    if (!publicRoute.includes(to.path)) {
      next('/login');
    } else {
      next();
    }
  }
});
