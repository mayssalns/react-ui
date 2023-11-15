import { HTMLAttributes } from 'react'

export const LayoutGrid = ({
  className = '',
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  const classes = 'layout-grid xl:w-1204 xl:mx-auto mx-4 grid ' + className
  return <div className={classes} {...rest} />
}
