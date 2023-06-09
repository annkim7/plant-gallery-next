import Button from './Button'
import { Close } from './Icon'
import Label from './Label'

interface ModalProps {
  label: string
  text: string
  func: () => void
  action: () => void
}

export default function Modal({ label, text, func, action }: ModalProps) {
  return (
    <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-40">
      <div className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
        <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-mdborder-opacity-100 px-4 py-2 dark:border-opacity-50">
            <Label label={label} />

            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={func}
            >
              <Close />
            </button>
          </div>

          <div className="relative px-6 py-2">
            <p className="text-slate-500">{text}</p>
          </div>

          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md p-4">
            <Button label="확인" func={action} style="square" />
          </div>
        </div>
      </div>
    </div>
  )
}
