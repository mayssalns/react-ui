import { DetailedHTMLProps, HTMLAttributes, Suspense } from 'react'
import { SectionSkeleton } from '../Skeletons/SectionSkeleton'

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Section = ({ className = '', ...rest }: SectionProps) => {
  const classes = 's-section py-10 animate-fade-in-down ' + className
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <section className={classes} {...rest} />
    </Suspense>
  )
}
