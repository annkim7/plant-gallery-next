import Image from 'next/image'

interface SizeProps {
  width: string
  height: string
}

interface ImgProps extends SizeProps {
  src: string | null | undefined
  alt: string | null | undefined
}

const sizeHandler = ({ width, height }: SizeProps) => {
  return `relative w-${width} h-${height}`
}

export default function Img({ width, height, src, alt }: ImgProps) {
  return (
    <>
      {src && (
        <div className={sizeHandler({ width, height })}>
          <Image
            src={src}
            alt={`${alt} 이미지`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      )}
    </>
  )
}
