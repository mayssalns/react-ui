import { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value?: any
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[]
}

export const Select = ({ options, className, ...rest }: SelectProps) => {
  return (
    <div className={`s-input ${className}`}>
      <div className="wrapper flex w-full">
        <select autoComplete="name" {...rest}>
          {options?.map((opntion, index) => (
            <option key={index}>{opntion.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
