import { TextareaHTMLAttributes, DetailedHTMLProps } from 'react'

interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  helperText?: string
}

export const TextArea = ({ className, helperText, ...rest }: TextAreaProps) => {
  return (
    <div className={`s-input ${className || ''}`}>
      <div className="wrapper flex w-full">
        <textarea {...rest} />
      </div>
      {helperText && <small className="text-red-500">{helperText}</small>}
    </div>
  )
}
