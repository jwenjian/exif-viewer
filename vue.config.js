// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'EXIF Viewer',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    // disable apple mobile web app
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'black',

    iconPaths: {
      favicon32: '/img/icons/favicon-32x32.png',
      favicon16: '/img/icons/favicon-16x16.png',
      appleTouchIcon: '/img/icons/apple-touch-icon-152x152.png',
      maskIcon: '/img/icons/safari-pinned-tab.svg',
      msTileImage: '/img/icons/msapplication-icon-144x144.png'
    }
  }
}