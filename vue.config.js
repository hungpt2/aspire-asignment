const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'zh-tw', 'zh-hk'],
      }),
    ],
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'border-radius-sm': '4px',
          'border-radius-base': '4px',
          'card-padding-base': '12px',
          'card-padding-wider': '16px',
          'primary-color': '#3E62B4',
          'link-color': '#3E62B4',
          'processing-color': '#3E62B4',
          'heading-color': 'rgba(0, 0, 0, 0.9)',
          'font-family': 'inherit',
          'text-color': 'rgba(0, 0, 0, 0.9)',
          'menu-dark-item-active-bg': 'rgba(0, 0, 0, 0.5)'
        },
        javascriptEnabled: true,
      },
    },
    sourceMap: true,
  },
};
