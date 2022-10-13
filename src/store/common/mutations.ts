import { MutationTree } from 'vuex';
import { ICommonState } from '@/store/common';

const mutations: MutationTree<ICommonState> = {
  SET_AVAILABLE_BALANCE(state, payload) {
    state.availableBalance = payload;
  },
  SET_LIST_CARD(state, payload) {
    state.listCard = payload;
  },
  SET_LIST_TRANSACTION(state, payload) {
    state.listTransaction = payload;
  },
};

export default mutations;
