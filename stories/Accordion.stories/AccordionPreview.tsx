import { useState } from 'react'
import { Accordion } from '../../components/Accordion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export const AccordionPreview = () => {
  const [expanded, setExpanded] = useState<string>()

  const items = [
    {
      id: 'item-1',
      title: 'Accordion 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 'item-2',
      title: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 'item-3',
      title: 'Accordion 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 'item-4',
      title: 'Accordion 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ]
  return (
    <div className="p-4 bg-white">
      {items.map((item) => (
        <Accordion
          key={item.id}
          id={`panel-${item.id}`}
          onChange={(value) => setExpanded(value)}
          expanded={expanded === `panel-${item.id}`}
          header={() => (
            <div className="cursor-pointer flex w-full border-t items-center justify-between p-2 lg:p-4 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-black-850">
              <div className="">{item.title}</div>
              <ChevronDownIcon
                className="h-5 w-5 flex-none animate-toggle accordion-icon"
                aria-hidden="true"
              />
            </div>
          )}
        >
          <div className="p-2 lg:p-4">
            <div className="text-black-950 dark:text-white">{item.content}</div>
          </div>
        </Accordion>
      ))}
    </div>
  )
}
