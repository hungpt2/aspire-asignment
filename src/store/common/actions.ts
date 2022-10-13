import { ICommonState } from '@/store/common';
import { IAppState } from '@/store/models';
import Vue from 'vue';
import { ActionTree } from 'vuex';

const actions: ActionTree<ICommonState, IAppState> = {
  async getAvailableBalance({ commit }) {
    try {
      const res = await Vue.prototype.$api.common.getAvailableBalance();
      commit('SET_AVAILABLE_BALANCE', res);
    } catch (error) {
      console.error(error);
    }
  },
  async getListCard({ commit }) {
    try {
      const res = await Vue.prototype.$api.common.getListCard();
      commit('SET_LIST_CARD', res);
    } catch (error) {
      console.error(error);
    }
  },
  async getListTransaction({ commit }) {
    try {
      const res = await Vue.prototype.$api.common.getListTransaction();
      commit('SET_LIST_TRANSACTION', res);
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
