import Vue from 'vue';
import VueI from 'vue-i18n';
import messages from './messages';

Vue.use(VueI);

let i18n = new VueI({
    locale: window.malico.lang, // set locale,
    fallbackLocale: 'en',
    messages
});

export default i18n;
