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
  Incubator : {
    //headerText
    title: ' IGM ИНКУБАТОР',
    body: 'IGM-н Инкубатор хөтөлбөр нь ирээдүйн тогтвортой/ногоон технологи дээр суурилсан гарааны бизнесүүд болон компаниуд руу чиглэж, тэдэнд хамтран ажиллах коворкинг оффисыг санал болгох болно.',
  
    //firstText
    bigText1: 'Уян хатан Инкубаторын Барилга, Байгууламж',
    subText1: 'IGM ИНКУБАТОР',
    paragraph1:
      'Инкубаторын ерөнхий бүтцийг өргөтгөх эсвэл багасгах боломжтой бөгөөд хэрэв инкубатор дотор илүү олон хүн байрших шаардлагатай болсон тохиолдолд дэд бүтцийг хялбархан өргөжүүлэх боломжтойгоороо давуу талтай юм.',
  
    //house
    subText2: 'IGM ИНКУБАТОР',
    bigText2: 'Инкубатор нь бүрэн тогтвортой дулаалгатай байх болно.',
    paragraph2: {
      one: 'Илүүдэл дулааныг дулааны системд удаан хугацаанд хадгалахаар бүтээн байгуулсан нь Улаанбаатар хотын өвлийн улиралын хүйтэн цаг уурт зайлшгүй шаардлагатай хүчин зүйл юм.',
      two: 'Мөн инкубаторыг нарны эрчим хүч, салхин эрчим хүч, усан цахилгаан станц зэрэг сэргээгдэх эрчим хүчээр 100 хувь хангана.',
      three: 'INTERNATIONAL GARDEN OF MONGOLIA',
    },
    //bench
    subText3: 'IGM ИНКУБАТОР',
    bigText3: 'IGM ИНКУБАТОР',
    paragraph3:
      'Оффисын өрөө, хурлын танхимд зориулж ухаалаг дизайн бүхий тавилга бүтээхэд дахин боловсруулсан материалыг ашиглана. Коворкинг оффис доторх сандал болон бусад боломжит тавилгуудыг дахин боловсруулсан хуванцараар хийх.',
  
    //text2
    bigText4: 'IGM Инкубаторын Үйл Ажиллагааны Удирдамж',
    paragraph4:
      'Зорилго Нэгт Хүмүүсийн Хүрээлэн нь Баянзүрх дүүргийн хүн ам зүйн гол оршин суугчдад хөдөө аж ахуйн мэргэжлийг зааж, сургах болно.',
    goals: [
      {
        index: '01',
        text: 'Инкубаторт сонгогдсон ногоон/тогтвортой технологийн компаниуд, гарааны бизнес эрхлэгчид болон энтрепренерүүд боломжийн үнээр байрших болно.',
      },
      {
        index: '02',
        text: 'Инкубаторын эдийн засгийн тогтвортой байдлыг хангахын тулд гадаад харилцаа, зөвлөгөө, тогтвортой хөгжлийн талаар арга хэмжээг зохион байгуулж, тасалбар зарах.',
      },
      {
        index: '03',
        text: 'Орон зай хэмнэхийн тулд ухаалаг, минималист интерьер дизайныг ашиглах.',
      },
    ],
    //bigLastText
    BIGTEXT:
      '1 INCUBATIONS, 2 FURTHER DEVELOPMENT, 3 RESEARCH & DEVELOPMENT, 4 COMMUNICATE WITH INDUSTRY, 5 LEADERS INTERNATIONAL AND LOCAL, 6 INFRASTRUCTURE REQUIRED FOR DEVELOPMENT',
  }
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
      <Incubator data = {data.Incubator} />
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
