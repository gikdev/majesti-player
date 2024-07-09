import { QuestionMark as DefaultIcon } from "@phosphor-icons/react"
import tw from "tailwind-styled-components"

export default function IconBtn({
  Icon = DefaultIcon,
  weight = "regular",
  isSpecial = false,
  clickHandler = () => null,
  color = "currentColor",
  mirrored = false,
  disabled = false,
}) {
  const Btn = tw.button`
    p-2 rounded-full cursor-pointer transition
    active:scale-90
    disabled:hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed
    ${p => (p.$isSpecial ? "bg-skin-primary" : "bg-transparent")}
    ${p => (p.$isSpecial ? "text-skin-bg-base" : "text-skin-text-muted")}
    ${p => (p.$isSpecial ? "" : "w-10 h-10")}
    ${p => (p.$isSpecial ? "hover:opacity-90" : "hover:bg-skin-bg-muted")}
  `

  return (
    <Btn disabled={disabled} type="button" onClick={clickHandler} $isSpecial={isSpecial}>
      <Icon mirrored={mirrored} color={color} size={isSpecial ? 36 : 24} weight={weight} />
    </Btn>
  )
}
