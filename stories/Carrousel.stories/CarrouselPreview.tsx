import { Carrousel, CarrouselProps } from '../../components/Carrousel'

export const CarrouselPreview = (props: CarrouselProps) => {
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

  return (
    <div className="bg-white p-4">
      <Carrousel id="preview-carrousel" items={items} />
    </div>
  )
}
