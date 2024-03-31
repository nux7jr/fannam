import ru from './locales/ru.json'
import en from './locales/en.json'

export default defineI18nConfig(() => ({
    legacy: false,
    warnHtmlMessage: false,
    messages: {
        ru,
        en,
     },
  }))