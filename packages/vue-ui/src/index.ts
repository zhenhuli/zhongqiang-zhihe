import './styles/components.css'

export { default as ZqButton } from './button'
export type { ButtonProps, ButtonType, ButtonSize } from './button'

export { default as ZqLink } from './link'
export type { LinkProps, LinkType } from './link'

export { default as ZqIcon } from './icon'
export type { IconProps } from './icon'

export { default as ZqContainer } from './container'
export type { ContainerProps } from './container'

export { default as ZqHeader } from './header'
export type { HeaderProps } from './header'

export { default as ZqAside } from './aside'
export type { AsideProps } from './aside'

export { default as ZqMain } from './main'
export type { MainProps } from './main'

export { default as ZqFooter } from './footer'
export type { FooterProps } from './footer'

export { default as ZqRow } from './row'
export type { RowProps, RowGutter } from './row'

export { default as ZqCol } from './col'
export type { ColProps } from './col'

import type { App, Plugin, Component } from 'vue'
import ZqButton from './button'
import ZqLink from './link'
import ZqIcon from './icon'
import ZqContainer from './container'
import ZqHeader from './header'
import ZqAside from './aside'
import ZqMain from './main'
import ZqFooter from './footer'
import ZqRow from './row'
import ZqCol from './col'

const components = [
  ZqButton,
  ZqLink,
  ZqIcon,
  ZqContainer,
  ZqHeader,
  ZqAside,
  ZqMain,
  ZqFooter,
  ZqRow,
  ZqCol
] as Component[]

const install: Plugin = (app: App) => {
  components.forEach(component => {
    const name = (component as any).name
    if (name) {
      app.component(name, component)
    }
  })
}

export { install }
export default {
  install,
  ...components
}
