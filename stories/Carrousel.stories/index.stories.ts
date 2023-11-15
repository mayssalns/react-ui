import type { Meta, StoryObj } from '@storybook/react'
import { CarrouselPreview } from './CarrouselPreview'

const items = [
  {
    id: 'item-1',
    title: 'Carrousel 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 'item-2',
    title: 'Carrousel 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 'item-3',
    title: 'Carrousel 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 'item-4',
    title: 'Carrousel 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
]

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Carrousel',
  component: CarrouselPreview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof CarrouselPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    id: 'carrousel-storie',
    items,
  },
}
