import { Logo } from '../Logo'
import { LocaleMenu } from './LocaleMenu'
import { Button } from '@/components/Button'
import { Locale, i18n } from '@/services/i18n'

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const locale = i18n.defaultLocale as Locale

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
          href="# "
          className="text-white dark:text-black-950 font-semibold bg-secondary dark:bg-white"
        >
          LogIn
        </Button>
        {/* <MobileMenu
          items={solutions.items}
          title={solutions.title}
          label={solutions.label}
          locale={attributes.locale}
          menu={menu}
        /> */}
      </div>
      {/* <SolutionsMenu
        items={solutions.items}
        title="Menu"
        label="Submenu"
        locale={attributes.locale}
        menu={menu}
      /> */}
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
          href="# "
          target="_blank"
          className="border text-secondary dark:text-white border-secondary dark:border-white font-semibold"
        >
          LogIn
        </Button>
        <Button
          size="large"
          href="# "
          target="_blank"
          className="border bg-secondary dark:bg-white font-semibold text-white dark:text-secondary"
        >
          Sign Up
        </Button>
      </div>
    </nav>
  )
}
