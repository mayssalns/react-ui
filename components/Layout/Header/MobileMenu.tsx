'use client'
import { MouseEvent, useState } from 'react'
import { Drawer } from '@mui/material'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { Logo } from '../Logo'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { LinkAttributes, LocaleAttribute } from '@/types/strapi'
import { Accordion } from '@/components/Accordion'

interface MobileMenuProps {
  items: LinkAttributes[]
  menu: LinkAttributes[]
  title: string
  label: string
  locale: LocaleAttribute
}
export const MobileMenu = ({ items, label, menu }: MobileMenuProps) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<string>()

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Drawer
        className="lg:hidden"
        open={open}
        onClose={setOpen}
        anchor="top"
        PaperProps={{
          classes: 'overflow-x-hidden',
        }}
      >
        <div className="flex items-center justify-between p-4">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            <Accordion
              id="panel-mobile"
              className="shadow-none"
              expanded={expanded === 'panel-mobile'}
              onChange={(value) => setExpanded(value)}
              header={() => (
                <div className="cursor-pointer flex w-full justify-between items-center  py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black-850">
                  <span>{label}</span>
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none animate-toggle accordion-icon"
                    aria-hidden="true"
                  />
                </div>
              )}
            >
              <div className="mt-2 space-y-2">
                {[...items].map((item) => (
                  <div
                    key={item.id}
                    aria-hidden
                    onClick={() => {
                      router.push(`${item.href}`)
                      setExpanded(undefined)
                      setOpen(false)
                    }}
                    className="block cursor-pointer w-full text-left py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black-850"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </Accordion>
            {menu.map((item, index) => (
              <a
                href="# "
                key={index}
                onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault()
                  router.push(`${item.href}`)
                  setOpen(false)
                }}
                className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black-850"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  )
}
