import { ReactNode } from 'react'

export interface DialogProps {
  open?: boolean
  children?: ReactNode
  onClose?: () => void
}

export const Dialog = (props: DialogProps) => {
  const { open, children } = props

  return (
    <div
      className={`SennoUi  transition-transform fixed z-10 overflow-y-auto top-0 w-full left-0 ${
        open ? '' : 'hidden'
      }`}
    >
      <div className="SennoUi dialog flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-backdrop">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="SennoUi paper inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-opacity sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
