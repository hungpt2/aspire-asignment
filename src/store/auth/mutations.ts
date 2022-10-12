import { MutationTree } from 'vuex';
import { IAuthState } from '@/store/auth';

const mutations: MutationTree<IAuthState> = {
  SET_BTC_PRICE(state, payload: {btc: number}) {
    state.btcPrice = payload.btc;
  },
  LOGIN(state) {
    state.isLoginRequesting = true;
  },
  LOGIN_SUCCESS(state) {
    state.isUserLoggedIn = true;
    state.isLoginRequesting = false;
  },
  LOGIN_FAIL(state) {
    state.isUserLoggedIn = false;
    state.isLoginRequesting = false;
  },
  LOGOUT(state) {
    state.isUserLoggedIn = false;
  },
};

export default mutations;
