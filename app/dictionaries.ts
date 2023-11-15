import 'server-only'
import { Locale } from '@/services/i18n'

const dictionaries = {
  'en-US': () =>
    import('../translations/en-US.json').then((module) => module.default),
  'pt-BR': () =>
    import('../translations/pt-BR.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
