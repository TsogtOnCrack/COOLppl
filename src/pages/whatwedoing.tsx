import { MainLayout } from 'layout'
import React from 'react'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { OurPlanetFirst } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const WhatWeDoing = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <MainLayout classname={`bg-mainBg flex flex-col h-screen `}>
      <div className={`${PADDINGX}`} id="FirstPart">
        <div id="spacer" className=" h-24 md:h-64"></div>
        <OurPlanetFirst />
      </div>
    </MainLayout>
  )
}

export default WhatWeDoing
