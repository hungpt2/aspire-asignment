import Vue from 'vue';
import { message } from 'ant-design-vue';
import API from '@/service/api/Api';
import { i18n } from '@/service/i18n';
import { router } from '@/router';
import store from '@/store/store';
import App from './App';
import './registerServiceWorker';

import '@/guard';

Vue.config.productionTip = false;

Vue.prototype.$api = new API();
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
