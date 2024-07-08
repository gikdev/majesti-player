import { QuestionMark as DefaultIcon } from "@phosphor-icons/react"
import tw from "tailwind-styled-components"

export default function IconBtn({
  Icon = DefaultIcon,
  weight = "regular",
  isSpecial = false,
  clickHandler = () => null,
}) {
  const Btn = tw.button`
    p-2 rounded-full cursor-pointer 
    ${p => (p.$isSpecial ? "bg-skin-primary" : "bg-transparent")}
    ${p => (p.$isSpecial ? "text-skin-bg-base" : "text-skin-text-muted")}
  `

  return (
    <Btn type="button" onClick={clickHandler} $isSpecial={isSpecial}>
      <Icon size={isSpecial ? 36 : 24} weight={weight} />
    </Btn>
  )
}
