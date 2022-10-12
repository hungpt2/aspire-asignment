import { getAuthenticationStorageInfo } from './service/storage/index';
interface ISetting {
  // signalWebSocketServerPrivate: string;
  restServerAddress: string;
}

const HOST = process.env.VUE_APP_API_URL;

const REST_PROTOCOL = window.location.protocol === 'https:' ? 'https' : 'http';
const WS_PROTOCOL = window.location.protocol === 'https:' ? 'wss' : 'ws';

const productionEnv: ISetting = {
  // signalWebSocketServerPrivate: `${WS_PROTOCOL}://${HOST}/ws/account/`,
  restServerAddress: `${REST_PROTOCOL}://${HOST}/`,
};

// export const signalWebsocketServerPrivate: string =
//   productionEnv.signalWebSocketServerPrivate;

export const restServerAddress: string = productionEnv.restServerAddress;


export const urlConfig = {
  get token() {
    const tokenInfo = getAuthenticationStorageInfo();
    return tokenInfo ? tokenInfo.accessToken : '';
  },

  get socketAddress() {
    // console.log(this.token);
    return `${WS_PROTOCOL}://${HOST}/ws/bo/account/?token=${this.token}`;
  },

  get publicPriceSocketAddress() {
    // console.log(this.token);
    return `${WS_PROTOCOL}://${HOST}/ws/public/price-feed/`;
  },

  get restAddress() {
    return `${REST_PROTOCOL}://${HOST}/`;
  },
};
