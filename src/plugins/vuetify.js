import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n';
import localePt from 'vuetify/lib/locale/pt';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  pt: {
    $vuetify: localePt
  }
};

const i18n = new VueI18n({
  locale: 'pt',
  messages
});

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    options: {
      customProperties: true
    },
    themes: {
      light: {},
      dark: {}
    }
  }
});
