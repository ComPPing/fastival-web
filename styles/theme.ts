const palette = {
  white: {
    default: '#FFFFFF',
  },
  black: {
    default: '#000000',
  },
  primary: {
    default: '#530086',
    opacity: {
      80: '#530086cc',
      50: '#53008680',
      30: '#5300864d',
    },
  },
  purple: {
    default: '#6709DF',
    opacity: {
      80: '#6709DFcc',
      50: '#6709DF80',
      30: '#6709DF4d',
    },
  },
  hotPink: {
    default: '#E75391',
    opacity: {
      80: '#E75391cc',
      50: '#E7539180',
      30: '#E753914d',
    },
  },
  pink: {
    default: '#FCAEF4',
    opacity: {
      80: '#FCAEF4cc',
      50: '#FCAEF480',
      30: '#FCAEF44d',
    },
  },
  green: {
    default: '#BDE3C7',
    opacity: {
      80: '#BDE3C7cc',
      50: '#BDE3C780',
      30: '#BDE3C74d',
    },
  },
  skyBlue: {
    default: '#BCEEEB',
    opacity: {
      80: '#BCEEEBcc',
      50: '#BCEEEB80',
      30: '#BCEEEB4d',
    },
  },
  blue: {
    default: '#5378D9',
    opacity: {
      80: '#5378D9cc',
      50: '#5378D980',
      30: '#5378D94d',
    },
  },
  grey: {
    100: '#F5F5F5',
    200: '#EAEAEA',
    300: '#DBDBDB',
    400: '#A8A8A8',
    500: '#8F8F8F',
    600: '#757575',
    700: '#5C5C5C',
    800: '#424242',
    900: '#292929',
  },
} as const

const colors = {
  text: {
    primary: palette.black.default,
  },
} as const

const fontSize = {
  title: '2.25rem', // 36px
  xxl: '1.5rem', // 24px
  xl: '1.25rem', // 20px
  lg: '1.125rem', // 18px
  md: '1rem', // 16px
  sm: '0.875rem', // 14px
  xs: '0.75rem', // 12px
  xxs: '0.625rem', // 10px
} as const

const fontWeight = {
  regular: 400,
  medium: 700,
  bold: 900,
} as const

const fonts = {
  weight: fontWeight,
  size: fontSize,
} as const

const devices = {
  mobile: `@media only screen and (max-width: 425px)`,
  tablet: `@media only screen and (max-width: 768px)`,
  desktop: `@media only screen and (max-width: 1440px)`,
} as const

const theme = {
  fonts,
  colors,
  devices,
} as const

export default theme
