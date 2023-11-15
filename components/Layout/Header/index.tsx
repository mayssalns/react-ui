import {
  LayoutAttributes,
  LinkAttributes,
  LocaleAttribute,
} from '@/types/strapi'
import { Logo } from '../Logo'
import { MobileMenu } from './MobileMenu'
import { SolutionsMenu } from './SolutionsMenu'
import { LocaleMenu } from './LocaleMenu'
import { Button } from '@/components/Button'

interface HeaderProps {
  attributes: LayoutAttributes
  locale: LocaleAttribute
}

export const Header = ({ attributes, locale }: HeaderProps) => {
  const { solutions, company, product, resources } = attributes

  const items = [...company.items, ...product.items, ...resources.items]

  const menu = [] as LinkAttributes[]

  items.forEach((item) => {
    if (['/services'].includes(item.href)) {
      menu[0] = item
    }
    if (['/about-us'].includes(item.href)) {
      menu[1] = item
    }
    if (['/contact-us'].includes(item.href)) {
      menu[2] = item
    }
    if (['/faq'].includes(item.href)) {
      menu[3] = item
    }
    if (['/plans'].includes(item.href)) {
      menu[4] = item
    }
  })

  return (
    <nav
      className="xl:w-1204 xl:mx-auto mx-4 flex items-center justify-between py-6 bg-white dark:bg-black-950 dark:text-white"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <Logo />
        </a>
      </div>
      <div className="flex lg:hidden gap-x-6">
        <Button
          size="large"
          href={attributes.logIn.href}
          className="text-white dark:text-black-950 font-semibold bg-secondary dark:bg-white"
        >
          {attributes.logIn.label}
        </Button>
        <MobileMenu
          items={solutions.items}
          title={solutions.title}
          label={solutions.label}
          locale={attributes.locale}
          menu={menu}
        />
      </div>
      <SolutionsMenu
        items={solutions.items}
        title={solutions.title}
        label={solutions.label}
        locale={attributes.locale}
        menu={menu}
      />
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-5 ml-5">
        <LocaleMenu
          locale={locale}
          items={[
            { id: 'en-US', label: 'English (US)' },
            { id: 'pt-BR', label: 'Português (BR)' },
          ]}
        />
        <Button
          size="large"
          href={attributes?.logIn?.href}
          target="_blank"
          className="border text-secondary dark:text-white border-secondary dark:border-white font-semibold"
        >
          {attributes.logIn.label}
        </Button>
        <Button
          size="large"
          href={attributes?.signUp?.href}
          target="_blank"
          className="border bg-secondary dark:bg-white font-semibold text-white dark:text-secondary"
        >
          {attributes?.signUp?.label}
        </Button>
      </div>
    </nav>
  )
}
