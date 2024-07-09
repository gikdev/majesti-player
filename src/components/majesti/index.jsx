import { IconBtn } from "@/components"
import {
  ArrowBendUpLeft,
  DotsThreeOutlineVertical,
  FastForward,
  Heart,
  Moon,
  Pause,
  Play,
  Repeat,
  Rewind,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Sun,
} from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export default function Majesti() {
  const [isThemeDark, setIsThemeDark] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [range, setRange] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", isThemeDark ? "dark" : "light")
  }, [isThemeDark])

  return (
    <div
      data-theme={isThemeDark ? "dark" : "light"}
      className="rounded-xl max-w-[25rem] w-full flex flex-col px-6 py-8 gap-12 justify-between text-skin-text-muted bg-skin-bg-base"
    >
      <div className="flex items-center justify-between">
        <IconBtn disabled mirrored Icon={ArrowBendUpLeft} />
        <p>درحال پخش ۱۲ از ۴۵</p>
        <IconBtn disabled mirrored Icon={DotsThreeOutlineVertical} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-[19rem] rounded-[2rem] aspect-square"
          src="https://cdnimg.kashoob.com/5yOtBcBz9UTRHe6Yqgi_LIxO4F1aGaCxUU985_0Gcoc/fill/200/200/sm/1/bG9jYWw6Ly8vc3RvcmFnZS9pbWFnZS8yMDIzMDcvMTY4ODMxNDg5MzAwOTc2Njc0MTQ4MzIuanBn.webp"
          alt="گروه سرود نجم الثاقب و مردم در حال دست زدن"
        />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl text-skin-text-base">سرود جانم علی</h2>
          <p className="text-md">گروه سرود نجم الثاقب</p>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <IconBtn disabled Icon={Repeat} />
          <IconBtn
            Icon={isThemeDark ? Sun : Moon}
            clickHandler={() => setIsThemeDark(prev => !prev)}
          />
          <IconBtn
            clickHandler={() => setIsLiked(prev => !prev)}
            color={isLiked ? "var(--clr-primary)" : "currentColor"}
            Icon={Heart}
            weight={isLiked ? "fill" : "regular"}
          />
          <IconBtn disabled Icon={SpeakerHigh} />
        </div>
        <div className="flex flex-col gap-1">
          <input
            style={{ "--range-value": `${range}%` }}
            type="range"
            min={0}
            max={100}
            value={range}
            onChange={e => setRange(+e.target.value)}
            className="range w-full"
          />
          <div className="flex justify-between items-center">
            <span>00:00:12</span>
            <span>01:32:43</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <IconBtn mirrored Icon={SkipBack} />
          <IconBtn mirrored Icon={Rewind} />
          <IconBtn
            clickHandler={() => setIsPlaying(prev => !prev)}
            Icon={isPlaying ? Pause : Play}
            isSpecial
          />
          <IconBtn mirrored Icon={FastForward} />
          <IconBtn mirrored Icon={SkipForward} />
        </div>
      </div>
    </div>
  )
}
