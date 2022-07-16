import { MainLayout } from 'layout'
import React from 'react'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { IgmSecondPart, OurPlanetFirst, OurPlanetSecond } from 'components'
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
        <div id="spacer" className={matches ? 'h-20' : 'h-72'}></div>
        <IgmSecondPart />
      </div>
    </MainLayout>
  )
}

export default WhatWeDoing
