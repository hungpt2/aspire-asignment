interface ISetting {
  restServerAddress: string;
}

const HOST = process.env.VUE_APP_API_URL;
const REST_PROTOCOL = window.location.protocol === 'https:' ? 'https' : 'http';

const productionEnv: ISetting = {
  restServerAddress: `${REST_PROTOCOL}://${HOST}/`,
};

export const restServerAddress: string = productionEnv.restServerAddress;
