import { HeadTextOfIcubator } from './headerText'
import { FirstText } from './firstText'
import { House } from './housePart'
import { Bench } from './bench'
import { Text2 } from './text2'
import { PADDINGX } from 'constants/layout'
import { Last } from './last'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

const Incubator = (props) => {
  const { data } = props

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const up = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
      opacity: 1,
      y: 0,
    },
  }
  return (
    <div className={`flex flex-col items-center max-w-shambWidth w-full `}>
      <motion.div variants={up} initial="hidden" whileInView={'visible'}>
        <HeadTextOfIcubator title={data.title} body={data.body} />
      </motion.div>
      <div className=" h-36"></div>

      <FirstText bigText={data.bigText1} subText={data.subText1} paragraph={data.paragraph1} />
      <div className=" h-36"></div>

      <House subText={data.subText2} bigText={data.bigText2} paragraph={data.paragraph2} />
      <div className=" h-36"></div>

      <Bench subText={data.bigText3} bigText={data.bigText3} paragraph={data.paragraph3} />
      <div className=" h-36"></div>

      <Text2 bigText={data.bigText4} paragraph={data.paragraph4} goals={data.goals} />
      <div className=" h-28 md:h-52"></div>

      <motion.div variants={up} initial="hidden" whileInView={'visible'}>
        <Last vari={matches ? 'title-small' : 'thin'} className={` px-0 md:${PADDINGX} !font-thin text-white/60 z-20 `}>
          {data.BIGTEXT}
        </Last>
      </motion.div>

      <div className=" h-36"></div>
    </div>
  )
}

export default Incubator
