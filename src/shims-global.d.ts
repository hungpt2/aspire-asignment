import Vue from 'vue';
import { WrappedFormUtils } from 'ant-design-vue/types/form/form';
import { IApi } from '@/service/api/Api';

declare module 'vue/types/vue' {
  interface Vue {
    $api: IApi;
    Form: WrappedFormUtils;
  }
}

