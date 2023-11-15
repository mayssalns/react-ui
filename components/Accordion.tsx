import { MutableRefObject, ReactNode, useRef } from 'react'

interface AccordionProps {
  id: string
  children: ReactNode
  header: (id?: string) => ReactNode
  expanded?: boolean
  onChange?: (id?: string) => void
  className?: string | undefined
}

export const Accordion = (props: AccordionProps) => {
  const contentEl = useRef() as MutableRefObject<HTMLDivElement>
  const { id, children, expanded, header, onChange, className = '' } = props

  const classes = `SennoUi accordion ${className}`

  if (!id) return null

  return (
    <div className={classes}>
      <div className="SennoUi accordion-header">
        <div
          className={`SennoUi accordion-toggle transition-[.3s] ${
            expanded ? 'show h-auto' : ''
          }`}
          onClick={() => onChange?.(expanded ? undefined : id)}
        >
          <div className="SennoUi accordion-title transition-[.3s]">
            {header?.(expanded ? undefined : id)}
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`SennoUi accordion-collapse ${expanded ? 'active' : ''}`}
        style={
          expanded
            ? { height: contentEl?.current?.scrollHeight || 0 }
            : { height: '0px' }
        }
      >
        <div className="SennoUi accordion-body animate-collapse">
          {children}
        </div>
      </div>
    </div>
  )
}
