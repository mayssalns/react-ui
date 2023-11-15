'use client'
import { MouseEvent, useState } from 'react'
import { Popover } from '@mui/material'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { LinkAttributes, LocaleAttribute } from '@/types/strapi'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/Button'

interface SolutionsMenuProps {
  items: LinkAttributes[]
  menu: LinkAttributes[]
  title: string
  label: string
  locale: LocaleAttribute
}

export const SolutionsMenu = ({
  items,
  menu,
  label,
  title,
}: SolutionsMenuProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const [anchorEl, setAnchorEl] = useState<
    HTMLButtonElement | HTMLAnchorElement | null
  >(null)

  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'solutions-popover' : undefined

  return (
    <div className="hidden lg:flex lg:gap-x-8">
      <Button
        onClick={handleClick}
        className="flex focus-visible::border-none items-center gap-x-1 text-base font-semibold leading-6 text-gray-900 dark:text-white"
      >
        {label}
        <ChevronDownIcon
          className={`h-5 w-5 flex-none text-gray-400 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        classes={{
          paper: 'mt-3 overflow-hidden bg-white dark:bg-black-950',
        }}
      >
        <div className="max-w-2xl p-2 grid gap-2">
          <div className="border-b uppercase px-4 py-2 text-secondary">
            {title}
          </div>

          <div className="grid grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative items-center  gap-x-6 p-4 text-base leading-6 hover:bg-gray-100 dark:hover:bg-black-850"
              >
                <div className="flex-auto">
                  <button
                    type="button"
                    className="block font-semibold text-gray-900 dark:text-warning-50 whitespace-nowrap"
                    onClick={(event: MouseEvent<HTMLButtonElement>) => {
                      event.preventDefault()
                      router.push(`${item.href}`)
                      setAnchorEl(null)
                    }}
                  >
                    {item.label}
                    <span className="absolute inset-0" />
                  </button>
                  <p className="mt-1 text-gray-600 dark:text-white">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Popover>
      {menu.map((item) => (
        <Link
          key={item.id}
          href={`${item.href}`}
          className={`text-base font-semibold leading-6 ${
            pathname === item.href
              ? 'text-primary dark:text-primary'
              : 'text-secondary dark:text-white'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
