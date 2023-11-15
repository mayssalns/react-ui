import * as Yup from 'yup'

export const yupErrors = (
  err: Yup.ValidationError,
): { [key: string]: string } => {
  if (err instanceof Yup.ValidationError) {
    const validationErrors: { [key: string]: string } = {}

    err.inner.forEach((error) => {
      if (error.path) {
        validationErrors[error.path] = error.message
      }
    })

    return validationErrors
  }

  return {}
}
