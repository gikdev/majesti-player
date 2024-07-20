import { useCallback, useEffect, useRef, useState } from "react"

/** boolean `useState` */
function useTogglable(initialState = false) {
  const [togglable, setTogglable] = useState(initialState)

  const toggle = useCallback(() => setTogglable(prevState => !prevState), [])

  return [togglable, toggle, setTogglable]
}

function useMusicPlayer(url) {
  const audio = useRef(new Audio(url))
  const [isPlaying, , setIsPlaying] = useTogglable()
  const [currentTime, setCurrentTime] = useState(audio.current.currentTime)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const interval = setInterval(() => {
      if (!audio.current) return
      setCurrentTime(audio.current.currentTime)
    }, 1000)

    return () => clearInterval(interval)
  }, [audio.current])

  const play = useCallback(() => {
    audio.current.play()
    setIsPlaying(true)
  }, [setIsPlaying])

  const pause = useCallback(() => {
    audio.current.pause()
    setIsPlaying(false)
  }, [setIsPlaying])

  const setMusic = useCallback(url => {
    audio.current.src = url
  }, [])

  const setTime = useCallback(percent => {
    const newTime = (percent / 100) * audio.current.duration
    if (!isFinite(newTime)) return 
    audio.current.currentTime = newTime

    return newTime
  }, [])

  const toggle = useCallback(() => (isPlaying ? pause() : play()), [isPlaying, pause, play])

  return { setMusic, play, pause, setTime, toggle, audioRef: audio, currentTime }
}

export { useTogglable, useMusicPlayer }
