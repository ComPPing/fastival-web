import '@emotion/react'
import { ColorType, FontType, DeviceType } from './theme'

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType
    fonts: FontType
    devices: DeviceType
  }
}
