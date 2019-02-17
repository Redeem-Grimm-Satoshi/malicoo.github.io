import Vue from 'vue';
import VueI from 'vue-i18n';
import messages from './messages';

Vue.use(VueI);


const dateTimeFormats = {
    'en': {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        },
        long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }
    },
    'fr': {
        short: {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        },
        long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric'
        }
    }
};

let i18n = new VueI({
    locale: window.malico.lang, // set locale,
    fallbackLocale: 'en',
    messages,
    dateTimeFormats
});

export default i18n;
