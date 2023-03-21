import { createElement } from "react"
import * as fa from "react-icons/fa"
import * as bi from "react-icons/bi"
import * as fi from "react-icons/fi"

type IconType = {
  name: any
  size?: number
  color?: string
}

export function split_at_index(value, index) {
  return {
    group: value.substring(0, index).toLowerCase(),
    iconName: value.substring(index)
  }
}

export default function Icon({ name, size = 20, color }: IconType) {
  const { group } = split_at_index(name, 2)
  let icon: any = createElement(fa["FaBeer"])
  if (group == "fa") icon = createElement(fa[name])
  if (group == "bi") icon = createElement(bi[name])
  if (group == "fi") icon = createElement(fi[name])
  return <div style={{ fontSize: size, color: color }}>{icon}</div>
}
