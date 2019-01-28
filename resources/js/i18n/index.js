import Vue from 'vue';
import VueI from 'vue-i18n';
import messages from './messages';

Vue.use(VueI);
const i18n = new VueI({
    locale: 'en',
    fallbackLocale: 'en',
    messages
});

export default i18n;
