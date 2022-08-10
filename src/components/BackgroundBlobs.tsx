import { useEffect, useRef } from "preact/hooks"
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
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    canvas.style.height = "100%"
    canvas.style.width = "100%"

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = canvas.width / 2

    const context = canvas.getContext("2d")

    if (!context) {
      return
    }

    let radgrad = context.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      radius
    )
    radgrad.addColorStop(0, `rgba(${BLOB_COLORS[color]},0.7)`)
    radgrad.addColorStop(0.8, `rgba(${BLOB_COLORS[color]},0.4)`)
    radgrad.addColorStop(1, `rgba(${BLOB_COLORS[color]},0)`)

    context.beginPath()
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
    context.fillStyle = radgrad
    context.fill()
  }, [color])

  return (
    <>
      <div
        className={`absolute opacity-50 dark:opacity-10 ${containerClassName}`}
      >
        <div
          style={{ width: size, height: size }}
          className={cn("blob-animation", className)}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  )
}

export default BackgroundBlobs
