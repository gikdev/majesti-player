import { IconBtn } from "@/components"
import { Pause, Play } from "@phosphor-icons/react"
import { useState } from "react"

export default function Majesti() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <p>درحال پخش ۱۲ از ۴۵</p>
      <IconBtn
        clickHandler={() => setIsPlaying(prev => !prev)}
        Icon={isPlaying ? Pause : Play}
        isSpecial
      />
    </>
  )
}
