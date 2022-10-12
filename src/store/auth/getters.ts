import { GetterTree } from 'vuex';
import { IAuthState } from '@/store/auth';
import { IAppState } from '@/store/models';

const getters: GetterTree<IAuthState, IAppState> = {
  auth(state, getter, rootState): IAuthState {
    return {
      isLoginRequesting: rootState.auth.isLoginRequesting,
      isUserLoggedIn: rootState.auth.isUserLoggedIn,
      btcPrice: rootState.auth.btcPrice,
    };
  },
  btcPrice(state, getter, rootState): number {
    return state.btcPrice;
  },
};

export default getters;
