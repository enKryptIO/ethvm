import { TranslateResult } from 'vue-i18n'

export interface NavMenu {
  header: NavHeader
  links?: NavLink[]
}

export interface NavLink {
  text: TranslateResult
  routerLink: string
  name: string
}
export interface NavHeader {
  text: TranslateResult
  icon: string
  routerLink?: string
}

export interface Footnote {
  color?: string
  text?: string
  icon?: string
}

export interface Tab {
  id: string
  title: string
  isActive: boolean
}

export interface Detail {
  title: string
  detail?: string
  link?: string
  copy?: boolean
}

export interface BlockDetailsTitle {
  mined: boolean
  next?: string
  prev?: string
  uncles?: string[]
}

export interface Crumb {
  text: string
  disabled: boolean
  icon?: string
  link?: string
}
