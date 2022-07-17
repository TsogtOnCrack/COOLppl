import DeskIgmSecondPart from './desk'
import MobileIgmSecondPart from './mobile'
import IgmSecondPartText from './text'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const IgmSecondPart = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className="flex items-center flex-col justify-center relative">
      {/* <div className={matches ? 'hidden' : 'absolute top-[20%] -left-[3%] z-10'}>
        <svg width="634" height="634" viewBox="0 0 634 634" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="317" cy="317" r="317" fill="url(#paint0_linear_1355_18022)" />
          <defs>
            <linearGradient
              id="paint0_linear_1355_18022"
              x1="317"
              y1="0"
              x2="317.261"
              y2="515.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2A2C2C" />
              <stop offset="1" stop-color="#2A2C2C" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      <IgmSecondPartText />
      <DeskIgmSecondPart />
      <MobileIgmSecondPart />
    </div>
  )
}

export default IgmSecondPart
