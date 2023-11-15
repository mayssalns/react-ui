import { InputHTMLAttributes, DetailedHTMLProps } from 'react'

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean
  helperText?: string
}

export const Input = (props: InputProps) => {
  const { className, helperText, error, ...rest } = props
  console.log('props', props)
  return (
    <div className={`s-input ${className || ''}`}>
      <div className="wrapper flex w-full">
        <input {...rest} />
      </div>
      {helperText && (
        <small className="text-red-500 text-start">{helperText}</small>
      )}
    </div>
  )
}
