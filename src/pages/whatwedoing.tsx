import { MainLayout } from 'layout'
import React from 'react'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { IgmSecondPart, OurPlanetFirst, OurPlanetSecond, IGMLAB, Incubator, Wpic, Ecard } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const data = {
  dir1: 'assets/bigGrass.jpg',
  dir: 'assets/incubatorPicture.jpg',
}

const WhatWeDoing = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const wpic = {
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
    <MainLayout classname={`bg-backgroundColor-darkGray flex flex-col items-center`}>
      <div className={`${PADDINGX}`} id="FirstPart">
        <OurPlanetFirst />
        <div id="spacer" className={matches ? 'h-[300px]' : ''}></div>
        <OurPlanetSecond />
      </div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[550px]'}></div>
      <IgmSecondPart />
      <div id="spacer" className={matches ? 'h-20' : 'h-80'}></div>
      <IGMLAB />
      <div id="spacer" className={matches ? 'h-20' : ' h-[280px]'}></div>
      <motion.div variants={wpic} initial="hidden" whileInView={'visible'}>
        <Wpic dir={data.dir} />
      </motion.div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[210px]'}></div>
      <Incubator />
      <div id="spacer" className={matches ? 'h-20' : 'h-[312px]'}></div>
      <motion.div variants={wpic} initial="hidden" whileInView={'visible'}>
        <Wpic dir={data.dir1} />
      </motion.div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[210px]'}></div>
      <Ecard />
    </MainLayout>
  )
}

export default WhatWeDoing
