import { Module } from 'vuex';
import { IAppState } from '@/store/models';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { getAuthenticationStorageInfo } from '@/service/storage';

const initAuthState: IAuthState = {
  isLoginRequesting: false,
  isUserLoggedIn: !!getAuthenticationStorageInfo(),
  btcPrice: 0,
};

export interface IAuthState {
  isLoginRequesting: boolean;
  isUserLoggedIn: boolean;
  btcPrice: number;
}

export const auth: Module<IAuthState, IAppState> = {
  state: initAuthState,
  actions,
  mutations,
  getters,
};
