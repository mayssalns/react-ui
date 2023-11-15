export declare type LocaleAttribute = 'en-US' | 'pt-BR'

export interface GenericAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: LocaleAttribute
}

export declare type MediaMime = 'image/gif' | 'image/jpeg' | 'image/png'
export declare type MediaExt = '.gif' | '.jpeg' | '.png'

export interface MediaFormat {
  ext: MediaExt
  url: string
  hash: string
  mime: MediaMime
  name: string
  path?: string | null
  size: number
  width: number
  height: number
}

export interface MediaDataAttributes {
  name: string
  alternativeText?: string | null
  caption: null
  width: number
  height: number
  formats?: {
    small: MediaFormat
    thumbnail: MediaFormat
  } | null
  hash: string
  ext: MediaExt
  mime: MediaMime
  size: number
  url: string
  previewUrl?: string | null
  provider: 'aws-s3'
  provider_metadata?: string | null
  createdAt: string
  updatedAt: string
}

export interface MediaAttributes {
  data: {
    id: number
    attributes: MediaDataAttributes
  }[]
}

export interface MediaLinkAttributes {
  id: number
  label: string
  href: string
  media: {
    data: {
      id: number
      attributes: MediaDataAttributes
    }
  }
}

export interface RedactorInputAttributes {
  id: number
  label: string
  value: string
}

export interface LinkAttributes {
  id: number
  label: string
  caption?: string | null
  href: string
  target: '_blank' | null
}

export interface ContactData {
  id: number
  street: LinkAttributes
  streetNumber: string
  postalCode: string
  optional: string
  phone: LinkAttributes[]
  email: LinkAttributes[]
  social: MediaLinkAttributes[]
  locale: string
  holdingShort: string
  holdingLong: string
}

export interface BaseMenuAttibutes {
  id: number
  title: string
  label: string
  items: LinkAttributes[]
}

export interface LayoutAttributes extends GenericAttributes {
  copyright: string
  resources: BaseMenuAttibutes
  company: BaseMenuAttibutes
  product: BaseMenuAttibutes
  solutions: BaseMenuAttibutes
  logIn: LinkAttributes
  signUp: LinkAttributes
}

export interface CaptionsAttributes {
  id: number
  title: string
  content?: string
}

export interface BaseItemAttributes {
  id: number
  title: string
  content?: string
  media: MediaAttributes
  caption?: string
}

export interface BreadcrumbOptionAttributes {
  label: string
  href: string
}

export interface BaseAttributes extends GenericAttributes {
  id: number
  title: string
  content?: string
  caption?: string
  items: BaseItemAttributes[]
  media?: MediaAttributes
}

export interface ProductAvailableAttributes {
  id: number
  available: boolean
  details: string
}

export interface FeaturePlanAttributes {
  id: number
  description: string
  caption: string
  agroup: boolean
  free: ProductAvailableAttributes
  standard: ProductAvailableAttributes
  enterprise: ProductAvailableAttributes
}

export interface InputAttributes {
  id: number
  label: string
  required: boolean
  type: 'text' | 'textarea' | 'number' | 'email' | 'select'
  placeholder?: string
  name: string
  options?: {
    id: number
    label: string
    value: string
    description?: string
  }[]
}

export interface SelectAttributes {
  id: number
  label: string
  required: boolean
  name: string
  options: {
    id: number
    label: string
  }[]
}

export declare type ProductSlug = 'free' | 'standard' | 'enterprise'

export interface ProductAttributes {
  id: number
  name: 'Free' | 'Standard' | 'Enterprise'
  slug: ProductSlug
  description: string
  caption: string
  features: RedactorInputAttributes
  min: number
  max: number
  price: {
    yearly: number
    monthly: number
  }
}
