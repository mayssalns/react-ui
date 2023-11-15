import { Button } from '../../components/Button'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
    size: 'large',
    className: 'bg-primary text-white',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    size: 'large',
    className: 'bg-secondary text-white',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
    className: 'bg-primary text-white',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
    className: 'bg-primary text-white',
  },
}
