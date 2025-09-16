import localFont from 'next/font/local'

const montserrat = localFont({
  src: [
    { path: '/Montserrat-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/Montserrat-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-montserrat',
  display: 'swap',
})

export default montserrat



