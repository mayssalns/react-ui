import { HTMLAttributes } from 'react'

interface SwitchButtonProps extends HTMLAttributes<HTMLElement> {
  LeftButtonProps?: HTMLAttributes<HTMLButtonElement>
  RigthButtonProps?: HTMLAttributes<HTMLButtonElement>
}

export const SwitchButton = ({
  id,
  LeftButtonProps,
  RigthButtonProps,
  ...rest
}: SwitchButtonProps) => {
  return (
    <div {...rest}>
      <button type="button" {...LeftButtonProps} />
      <button type="button" {...RigthButtonProps} />
    </div>
  )
}
