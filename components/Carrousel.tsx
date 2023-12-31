'use client'
import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { Button } from './Button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export interface CarrouselItemProps {
  id: number | string
  title?: ReactNode
  content?: ReactNode
  nav?: ReactNode
}

export interface CarrouselProps {
  id: string
  items: CarrouselItemProps[]
  onChange?: Dispatch<SetStateAction<number>>
  content?: (index: number) => ReactNode
  classes?: {
    nav?: string | undefined
    navItems?: string | undefined
    navActive?: string | undefined
    arrowButton?: string | undefined
  }
}

export const Carrousel = ({
  items,
  onChange,
  classes,
  content,
  id,
}: CarrouselProps) => {
  const [index, setIndex] = useState<number>(0)

  const handleIndex = (action: 'prev' | 'next') => {
    let newIndex = 0

    if (action === 'prev') {
      newIndex = index === 0 ? items.length - 1 : index - 1
    }

    if (action === 'next') {
      newIndex = items.length - 1 === index ? 0 : index + 1
    }

    const content = document.querySelector(`.carrousel-content-${id}`)
    content?.classList.remove('animate-fade-in-down')
    setTimeout(() => {
      content?.classList.add('animate-fade-in-down')
    }, 100)

    setIndex(newIndex)
    if (typeof onChange === 'function') {
      onChange(newIndex)
    }
  }

  return (
    <div className="grid grid-cols-6 gap-4 animate-fade-in-down" id={id}>
      <div className="flex items-center justify-center">
        <Button
          onClick={() => handleIndex('prev')}
          size="large"
          className="rounded-full"
        >
          <ChevronLeftIcon
            className={`h-8 w-8 flex-none ${classes?.arrowButton}`}
            aria-hidden="true"
          />
        </Button>
      </div>
      <div className="col-span-4 col-start-2">
        <div
          className={`flex flex-col md:flex-row gap-4 mb-6 ${
            classes?.navItems || ''
          }`}
        >
          {items?.map((item, i) => {
            if (!item.nav) return null
            return (
              <div className="" key={item.id}>
                <Button
                  size="medium"
                  className={`whitespace-nowrap w-full flex justify-center ${
                    classes?.nav || ''
                  } ${index === i ? classes?.navActive : 'bg-inherit'}`}
                  onClick={() => {
                    setIndex(i)
                    if (typeof onChange === 'function') {
                      onChange(i)
                    }
                  }}
                >
                  {item.nav}
                </Button>
              </div>
            )
          })}
        </div>
        <div className={`grid gap-6 carrousel-content-${id}`}>
          {content?.(index) || (
            <>
              {items?.[index].title}
              {items?.[index].content}
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          size="large"
          onClick={() => handleIndex('next')}
          className="rounded-full"
        >
          <ChevronRightIcon
            className={`h-8 w-8 flex-none ${classes?.arrowButton}`}
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}
