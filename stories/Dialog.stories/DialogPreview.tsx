import { Dialog, DialogProps } from '../../components/Dialog'
import { Button } from '../../components/Button'
import { useState } from 'react'

export const DialogPreview = (props: DialogProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button
        type="button"
        size="large"
        onClick={() => setOpen(true)}
        className="text-primary font-bold border border-primary"
      >
        Open
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="grid gap-6">
          <div className="text-xl font-bold">Dialog Title</div>
          <p>
            Lorem ipsum; Lorem ipsum; Lorem ipsum Lorem ipsum; Lorem ipsum;
            Lorem ipsum Lorem ipsum; Lorem ipsum; Lorem ipsum Lorem ipsum; Lorem
            ipsum; Lorem ipsum Lorem ipsum; Lorem ipsum; Lorem ipsum Lorem
            ipsum; Lorem ipsum; Lorem ipsum Lorem ipsum; Lorem ipsum; Lorem
            ipsum Lorem ipsum; Lorem ipsum; Lorem ipsum Lorem ipsum; Lorem
            ipsum; Lorem ipsum
          </p>

          <div className="flex justify-end gap-4">
            <Button
              className="primary"
              size="large"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="text-primary font-bold border border-primary"
              size="large"
            >
              Submit
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
