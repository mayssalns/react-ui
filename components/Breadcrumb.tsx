import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface BreadcrumbItem {
  href: string
  label: string
}

interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[]
}

export const Breadcrumb = ({ items, ...rest }: BreadcrumbProps) => {
  return (
    <nav className="bg-grey-light w-full" {...rest}>
      <ol className="list-reset flex">
        {items?.map((item, index) => (
          <li key={index} className="flex">
            <Link
              href={item.href}
              className="mx-1 text-neutral-500 dark:text-neutral-400"
            >
              {item.label}
            </Link>
            {![items.length - 1].includes(index) && (
              <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                <ChevronRightIcon className="h-6 w-5" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
