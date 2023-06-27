import { ChangeEventHandler } from 'react'

interface UploadProps {
  event: ChangeEventHandler<HTMLInputElement>
}

export default function Upload({ event }: UploadProps) {
  return (
    <div>
      <label
        className="block my-3 text-base font-medium text-slate-600"
        htmlFor="file_input"
      >
        이미지
      </label>
      <input
        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-sm font-normal text-slate-400 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-blue-500 file:px-3 file:py-[0.5rem] file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        accept="image/*"
        onChange={event}
      />
      <p
        className="mt-1 text-xs text-slate-500 dark:text-gray-300"
        id="file_input_help"
      >
        png, jpg의 이미지 확장자를 사용해주세요
      </p>
    </div>
  )
}
