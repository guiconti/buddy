import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF4F75',
        secondary: '#b46bf4',
        accent: '#3CDBD3',
        success: '#4CAF50',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
