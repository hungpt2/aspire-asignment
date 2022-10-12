import { router } from '@/router';
import { clearAllStorage, setLocalStorageItem } from '@/service/storage';
import { LOCAL_STORAGE_KEY } from '@/shared/constant';
import { getErrorMessage } from '@/shared/helpers/error/apiError';
import { ILoginRequest, ITokenInfo } from '@/shared/models';
import { IAuthState } from '@/store/auth';
import { IAppState } from '@/store/models';
import Vue from 'vue';
import { ActionTree } from 'vuex';
import { i18n } from '@/service/i18n';
import { connectSocket, disconnectSocket } from '../../service/socket/index';

const actions: ActionTree<IAuthState, IAppState> = {
  async login({ commit, dispatch }, credential: ILoginRequest) {
    try {
      commit('LOGIN');
      if (
        credential.email &&
        credential.email !== '' &&
        credential.password &&
        credential.password !== ''
      ) {
        const res = await Vue.prototype.$api.auth.login(credential);
        if ('token' in res) {
          const token: ITokenInfo = {
            accessToken: res.token,
            expiresIn: 0,
            refreshToken: '',
          };
          setLocalStorageItem(LOCAL_STORAGE_KEY.authorization, token);
          await dispatch('updateUserProfile', res.profile);
          commit('LOGIN_SUCCESS');
          connectSocket();
          Vue.prototype.$message.success('Login successfully!');
          router.push({ path: '/' });
        } else {
          return res.provider;
        }
      } else {
        commit('LOGIN_FAIL');
        Vue.prototype.$message.error('ERROR.EMAIL-OR-PASS-EMPTY');
      }
    } catch (error) {
      commit('LOGIN_FAIL');
      Vue.prototype.$message.error(i18n.t(getErrorMessage(error)));
    }
  },
  async logout({ commit }) {
    await clearAllStorage();
    await disconnectSocket();
    await commit('LOGOUT');
    await commit('UPDATE_USER_PROFILE_SUCCESS', null);
    router.push({ path: '/login' });
  },
};

export default actions;
