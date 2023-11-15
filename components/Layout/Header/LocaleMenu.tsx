'use client'
import { LocaleAttribute } from '@/types/strapi'
import { Menu, MenuItem } from '@mui/material'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { MouseEvent, useState } from 'react'

interface LocaleMenuProps {
  items: { id: string; label: string }[]
  locale: LocaleAttribute
}

export function LocaleMenu({ items, locale }: LocaleMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const onChangeHandler = (value: LocaleAttribute) => {
    // cookieSet({
    //   name: 'locale',
    //   value,
    // })
  }

  return (
    <>
      <Button
        className="whitespace-nowrap shadow-none"
        size="large"
        startIcon={
          <GlobeAltIcon
            className="h-5 w-5 flex-none text-black-950"
            aria-hidden="true"
          />
        }
        id="localeButton"
        aria-controls={open ? 'localeMenu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {locale}
      </Button>
      <Menu
        id="localeMenu"
        className="hidden lg:flex lg:gap-x-8"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'localeButton',
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.id}
            className="group relative items-center gap-x-6 p-4 text-base leading-6 hover:bg-gray-100 dark:hover:bg-black-850"
          >
            <div className="flex-auto">
              <button
                type="button"
                className="block font-semibold text-gray-900 dark:text-warning-50 whitespace-nowrap"
                onClick={() => {
                  onChangeHandler(item.id as LocaleAttribute)
                  close()
                }}
              >
                {item.label}
                <span className="absolute inset-0" />
              </button>
              {/* <p className="mt-1 text-gray-600 dark:text-white">
                      {item.caption}
                    </p> */}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
