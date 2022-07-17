import { MainLayout } from 'layout'
import React from 'react'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { IgmSecondPart, OurPlanetFirst, OurPlanetSecond, IGMLAB, Incubator, Wpic, Ecard } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const WhatWeDoing = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <MainLayout classname={`bg-backgroundColor-darkGray flex flex-col`}>
      <div className={` max-w-shambWidth ${PADDINGX}`} id="FirstPart">
        <OurPlanetFirst />
        <OurPlanetSecond />
      </div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[550px]'}></div>
      <IgmSecondPart />
      <div id="spacer" className={matches ? 'h-20' : 'h-80'}></div>
      <IGMLAB />
      <div id="spacer" className={matches ? 'h-20' : 'h-[210px]'}></div>
      <Incubator />
      <div id="spacer" className={matches ? 'h-20' : 'h-[312px]'}></div>
      <Wpic dir={'assets/bigGrass.jpg'} />
      <div id="spacer" className={matches ? 'h-20' : 'h-[210px]'}></div>
      <Ecard />
    </MainLayout>
  )
}

export default WhatWeDoing
