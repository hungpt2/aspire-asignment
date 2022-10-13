import Vue from 'vue';
import { IApi } from '@/service/api/Api';

declare module 'vue/types/vue' {
  interface Vue {
    $api: IApi;
  }
}
