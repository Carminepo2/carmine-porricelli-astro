import type { FunctionalComponent } from "preact"
import cn from "clsx"

const BackgroundBlobs: FunctionalComponent = () => {
  return (
    <>
      <BackgroundBlob
        color="yellow"
        containerClassName="-top-72 right-0"
        size={1150}
      />
      <BackgroundBlob
        color="blue"
        containerClassName="-top-60 left-0"
        size={1150}
      />
      <BackgroundBlob
        color="yellow"
        containerClassName="-bottom-[600px] right-0"
        size={800}
      />
    </>
  )
}

const BLOB_COLORS = {
  pink: "249,168,212",
  yellow: "252,211,77",
  purple: "196,181,253",
  blue: "147,197,253",
  indigo: "165,180,252",
  green: "110,231,183",
}

interface BackgroundBlobProps {
  color?: keyof typeof BLOB_COLORS
  className?: string
  containerClassName?: string
  size?: number
}

const BackgroundBlob: FunctionalComponent<BackgroundBlobProps> = ({
  color = "yellow",
  className = "",
  containerClassName = "",
  size = 120,
}: BackgroundBlobProps) => {
  return (
    <>
      <div
        className={`absolute opacity-40 dark:opacity-5 ${containerClassName}`}
      >
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: `rgb(${BLOB_COLORS[color]})`,
            filter: "blur(100px)",
          }}
          className={cn("blob-animation", className)}
        />
      </div>
    </>
  )
}

export default BackgroundBlobs
