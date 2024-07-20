import { IconBtn } from "@/components"
import { MUSICS } from "@/data"
import { useMusicPlayer, useTogglable } from "@/hooks"
import { persianifyNumbers, secondsTo24HourFormat } from "@/utils"
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
import tw from "tailwind-styled-components"

const Player = tw.div`sm:rounded-xl sm:w-[25rem] w-full h-full sm:h-[50rem] flex flex-col p-6 gap-0 justify-between text-skin-text-muted bg-skin-bg-base`

export default function Majesti() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(0)
  const [isThemeDark, toggleIsThemeDark] = useTogglable(true)
  const [isPlaying, toggleIsPlaying] = useTogglable()
  const [isLiked, toggleIsLiked] = useTogglable()
  const [range, setRange] = useState(0)
  const numOfAllMusics = MUSICS.length
  const currentMusic = MUSICS[currentlyPlaying]
  const { toggle, audioRef, currentTime, setTime } = useMusicPlayer(currentMusic.audioURL)

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", isThemeDark ? "dark" : "light")
  }, [isThemeDark])

  useEffect(() => {
    setRange(currentTime / audioRef.current.duration * 100)
  }, [currentTime, audioRef.current])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setTime(range) 
  }, [range])

  return (
    <Player data-theme={isThemeDark ? "dark" : "light"}>
      <div className="flex items-center justify-between">
        <IconBtn disabled mirrored Icon={ArrowBendUpLeft} />
        <p>
          درحال پخش {persianifyNumbers(currentlyPlaying + 1)} از {numOfAllMusics}
        </p>
        <IconBtn disabled mirrored Icon={DotsThreeOutlineVertical} />
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          className="w-[19rem] rounded-[2rem] aspect-square"
          src={currentMusic.imageURL}
          alt="عکس بنر مداحی"
        />
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl text-skin-text-base">{currentMusic.name}</h2>
          <p className="text-md">{currentMusic.singer}</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <IconBtn disabled Icon={Repeat} />
          <IconBtn Icon={isThemeDark ? Sun : Moon} clickHandler={toggleIsThemeDark} />
          <IconBtn
            clickHandler={toggleIsLiked}
            color={isLiked ? "var(--clr-primary)" : "currentColor"}
            Icon={Heart}
            weight={isLiked ? "fill" : "regular"}
          />
          <IconBtn disabled Icon={SpeakerHigh} />
        </div>
        <div className="flex flex-col gap-1">
          <input
            style={{ "--range-value": `${range + 1}%` }}
            type="range"
            min={0}
            max={100}
            value={range}
            onChange={e => setRange(+e.target.value)}
            className="range w-full"
          />
          <div className="flex justify-between items-center">
            <span>{persianifyNumbers(secondsTo24HourFormat(currentTime))}</span>
            <span>{persianifyNumbers(secondsTo24HourFormat(audioRef.current.duration))}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <IconBtn mirrored Icon={SkipBack} />
          <IconBtn mirrored Icon={Rewind} />
          <IconBtn
            clickHandler={() => {
              toggleIsPlaying()
              toggle()
            }}
            Icon={isPlaying ? Pause : Play}
            isSpecial
          />
          <IconBtn mirrored Icon={FastForward} />
          <IconBtn mirrored Icon={SkipForward} />
        </div>
      </div>
    </Player>
  )
}
