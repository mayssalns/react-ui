import React, { ButtonHTMLAttributes } from 'react'

declare type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends ButtonType {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  inProgress?: boolean
  // variant?: 'text' | 'outlined' | 'contained'
  size?: 'small' | 'medium' | 'large'
  href?: string
  target?: '_blank'
}

const ProgressIcon = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
)
export const Button = ({
  id = 'defaultButton',
  children,
  startIcon,
  inProgress,
  className,
  size,
  href,
  ...rest
}: ButtonProps) => {
  const classes = `SennoUi button ${className || ''} ${size || ''}`

  if (typeof href === 'string') {
    return (
      <a className={classes} href={href}>
        {!startIcon && inProgress && (
          <div className="">
            <ProgressIcon />
          </div>
        )}
        {startIcon && !inProgress && startIcon}
        {children}
      </a>
    )
  }

  return (
    <button type="button" id={id} className={classes} {...rest}>
      {!startIcon && inProgress && (
        <div className="">
          <ProgressIcon />
        </div>
      )}
      {startIcon && !inProgress && <div className="">{startIcon}</div>}
      {children}
    </button>
  )
}
