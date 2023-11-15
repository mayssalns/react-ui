import { toast, ToastOptions } from 'react-toastify'

// https://fkhadra.github.io/react-toastify/introduction/

const defaultOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const Toast = {
  success(content: string, options?: ToastOptions) {
    return toast.success(content, {
      ...defaultOptions,
      ...options,
      type: 'success',
    })
  },
  error(content: string, options?: ToastOptions) {
    return toast.error(content, {
      ...defaultOptions,
      ...options,
      type: 'error',
    })
  },
  warn(content: string, options?: ToastOptions) {
    return toast.warn(content, {
      ...defaultOptions,
      ...options,
      type: 'warning',
    })
  },
}
