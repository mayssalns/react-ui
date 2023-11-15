import type { Meta, StoryObj } from '@storybook/react'
import { AccordionPreview } from './AccordionPreview'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Accordion',
  component: AccordionPreview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof AccordionPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {},
}
