import { Module } from 'vuex';
import { IAppState } from '@/store/models';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { IAvailableBalance, ICard } from '@/shared/models';
import { ITransaction } from '@/shared/models/transaction';

const initCommonState: ICommonState = {
  availableBalance: {
    currency: '',
    balance: '',
  },
  listCard: [],
  listTransaction: [],
};

export interface ICommonState {
  availableBalance: IAvailableBalance;
  listCard: ICard[];
  listTransaction: ITransaction[];
}

export const common: Module<ICommonState, IAppState> = {
  state: initCommonState,
  actions,
  mutations,
  getters,
};
