import { Module } from 'vuex';
import { IAppState } from '@/store/models';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const initAuthState: ICommonState = {
  isLoggedIn: false,
};

export interface ICommonState {
  isLoggedIn: boolean;
}

export const common: Module<ICommonState, IAppState> = {
  state: initAuthState,
  actions,
  mutations,
  getters,
};
