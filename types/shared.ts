import { LocaleAttribute } from './strapi'

interface PageParams {
  locale: LocaleAttribute
}

export interface PageProps {
  params: PageParams
}

export declare type VoidFunction = () => void

export declare type SafeNumber = number | `${number}`
