import BigTitle from './bigTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const OurPlanetFirst = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className={matches ? 'w-screen' : 'w-full flex justify-center'}>
      <div
        className={
          matches ? 'absolute w-[400px] -top-[10%] -right-[30%]' : 'absolute w-[1200px] -top-[23%] -right-[20%]'
        }
      >
        <img src="assets\realearth.webp" alt="" className="z-10" />
      </div>

      <div className="w-[80%] z-20">
        <BigTitle
          titleTop="Our Planet"
          titleBtm="Our Garden"
          category1="Synergy"
          category2="Sustainable"
          category3="Scanable"
        />
      </div>
    </div>
  )
}

export default OurPlanetFirst
