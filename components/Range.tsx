import { Slider, SliderProps } from '@mui/material'

interface RangeProps extends SliderProps {
  classes?: { slider: string }
}

export const Range = ({
  id,
  children,
  className,
  classes,
  ...rest
}: RangeProps) => {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
      >
        {children}
      </label>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        className={classes?.slider || ''}
        sx={{
          color: '#2349FF',
        }}
        {...rest}
      />
    </div>
  )
}
