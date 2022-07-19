import { MainLayout } from 'layout'
import React from 'react'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'
import { IgmSecondPart, OurPlanetFirst, OurPlanetSecond, IGMLAB, Incubator, Wpic, Ecard } from 'components'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { title } from 'process'

const data = {
  dir1: 'assets/bigGrass.jpg',
  dir: 'assets/incubatorPicture.jpg',
  ourPlanetFirst: {
    earth: `assets/realearth.webp`,
    mouse: 'assets/svgs/mouse.svg',
    bigTitle: {
      titleTop: 'Our Planet',
      titleBtm: 'Our Garden',
      category1: 'Synergy',
      category2: 'Sustainable',
      category3: 'Scanable',
    },
  },
  ourPlanetSecond: {
    igmIncubator: 'assets/igm/igmIncubator.png',
    igmLabs: 'assets/igm/igmLabs.png',
    igmGarden: 'assets/igm/igmGarden.png',
    title: 'What we’re doing?',
    goals: [
      {
        index: '01',
        textDesktop: 'Судалгаа шинжилгээ дээр суурилсан байгальд  ээлтэй тогтвортой цэцэрлэгт хүрээлэнг бий болгох',
        textMobile: 'Create a natural garden through sustainable botany.',
      },
      {
        index: '02',
        textDesktop:
          'Эрдэмтэд судлаачид болон олон нийтийн оролцоотойгоор тогтвортой ногоон байгууламжийн инновацийг дэмжих, энэ чиглэлийн системийг хөгжүүлэх.',
        textMobile:
          'House community centres which will facilitate community outreach programs and foster innovation in the agricultural space.',
      },
      {
        index: '03',
        textDesktop:
          'Олон улсын цэцэрлэгт хүрээлэнгийн гэсэн 3 тэргүүлэх хөтөлбөрөөр дамжуулан инновацийг НЭВТРҮҮЛЭХ : НОГООН ТЕХНОЛОГИЙН ЛАБОРАТОРИ, ИНКУБАТОР, ЗОРИЛГО НЭГТ ХҮМҮҮСИЙН ХҮРЭЭЛЭЛ.',
        textMobile:
          'Facilitate innovation through 2 flagship programs: - IGM LABS -IGM INCUBATOR -IGM COMMUNITY GARDEN',
      },
    ],
  },
  igmSecondPart: {
    title: 'General planning of the institute',
    description: {
      desktop:
        'Бага насны хүүхдүүд, өсвөр насны залуучууд, ахмад настан болон тусгай хэрэгцээт иргэдийн чөлөөт цагаа өнгөрүүлэх аюулгүй орчин бүрдүүлэх. IGM төсөл нь 5 бүсээс бүрдэнэ. Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.',
      mobile:
        'Бидний "Art-Tech Empire" Лэнд Арт төсөл маань Дорноговь аймгийн, Төхөмийн хөндий, Ар цацын ус гэх байршлын 5 га газарт нийт 30,000 ширхэг буюу 10,000 бортоготой мод тарих төсөл юм.',
    },
    cells: [
      {
        picture: 'assets/IgmSecondPartPictures/tavilga.jpg',
        text: 'Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.',
      },
      {
        picture: 'assets/IgmSecondPartPictures/talbai.jpg',
        text: 'Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.',
      },
      {
        picture: 'assets/IgmSecondPartPictures/zam.jpg',
        text: 'Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.',
      },
      {
        picture: 'assets/IgmSecondPartPictures/talbai.jpg',
        text: 'Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.',
      },
      {
        picture: 'assets/IgmSecondPartPictures/narniiErchimHuch.jpg',
        text: 'Энэ хэсэг нь тогтвортой технологийн хөгжилд ашиглагдах бөгөөд IGM-н лаборатори, инкубаторын барилга байгууламж, зуны болон өвлийн хүлэмж, машины зогсоол, хог хаягдлын менежментийн систем, цэцэрлэгт хүрээлэн рүү орох хаалга зэргийг багтаана.',
      },
    ],
  },
  igmLab: {
    bgPicture: '../assets/igmlabs.webp',
    title: 'IGM ЛАБ',
    paragraph:
      'IGM-н Лаборатори хэсэгт тухайн лабораторийн эрдэмтэд, судлаачид IGM-н дэд бүтцийг бүрдүүлэх гол туршилтын төслүүдийг цаашид хөгжүүлэх болно.',
    cards: [
      {
        headerEl: 'IGM ЛАБ',
        title: 'Сэргээгдэх эрчим хүчний систем',
        desc: 'Нарны гэрэл, салхи гэх мэт эх үүсвэрүүдийн нөөц ямагт өөрчлөгддөг тул барилгын эрчим хүчний хэрэгцээг бүрэн хангаж чаддаггүйн улмаас Гравитацийн эрчим хүчний вольтийг эрчим хүчний шийдлүүдтэй хослуулах зориулалттай бүтээнэ.',
        className: 'py-12',
        buttonText: 'See more',
      },
      {
        headerEl: 'IGM ЛАБ',
        title: 'Хог хаягдлын тогтвортой менежментийн систем',
        desc: 'Бид хог хаягдлын менежментийн шинэлэг, тогтвортой хандлагыг судлах, хөгжүүлэхэд дэмжлэг үзүүлнэ. Төслийн анхан шатны үеэс эхлэн зах зээлд гаргахад шаардлагатай дэд бүтцээр хангах замаар бид тус дэмжлэгийг үзүүлэх болно.',
        className: 'py-12',
        buttonText: 'See more',
      },
      {
        headerEl: 'IGM ЛАБ',
        title: 'Хог хаягдлыг дахин боловсруулах үйл ажиллагаа',
        desc: 'Судалгаа, зах зээлд оршин тогтнох чадвар, Тогтвортой Хөгжлийн Зорилтуудад оруулах хувь нэмэр, хамгийн чухал нь дотоодын зах зээлд өргөжих боломж зэрэгт үндэслэн тогтвортой дэд бүтцийн төслүүдийг зориудаар сонгодог.',
        className: 'py-12',
        buttonText: 'See more',
      },
    ],
  },
  incubator: {
    bigHouse: 'assets/houseBig.png',
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
  },
  ecard: {
    title: 'IGM Зорилго Нэгт Хүмүүсийн Хүрээлэн',
    subTitle:
      'Зорилго Нэгт Хүмүүсийн Хүрээлэн нь Баянзүрх дүүргийн хүн ам зүйн гол оршин суугчдад хөдөө аж ахуйн мэргэжлийг зааж, сургах болно.',

    body1: {
      subTitle: 'IGM ИНКУБАТОР',
      title: 'Тус хүрээлэнгийн эрхэм зорилго',
      body: 'IGM-н хүрээнд үйлдвэрлэсэн, боловсруулсан бүтээгдэхүүнийг тус үйл ажиллагаад оролцогч иргэдэд тарааж, үлдэгдэл бүтээгдэхүүнийг дотоодын зах зээлд борлуулж, Баянзүрх дүүргийн асрамжийн газар, сургууль болон эрсдэлтэй бүлгийн залуучуудад олгох юм',
    },
    body2: {
      subTitle: 'IGM ИНКУБАТОР',
      title: 'IGM Зорилго Нэгт Хүмүүсийн Хүрээлэн',
      body: 'IGM-н олон талт үйл ажиллагааны үндэслэл нь органик цэцэрлэгжүүлэлттэй холбоотой эрүүл мэнд, сайн сайхан байдлыг дэмжих, дэлхийтэй харилцах харилцааг хүндэтгэх явдал юм.',
    },
  },
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
        <OurPlanetFirst ourPlanetFirst={data.ourPlanetFirst} />
        <div id="spacer" className={matches ? 'h-[300px]' : ''}></div>
        <OurPlanetSecond ourPlanetSecond={data.ourPlanetSecond} />
      </div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[550px]'}></div>
      <IgmSecondPart igmSecondPart={data.igmSecondPart} />
      <div id="spacer" className={matches ? 'h-20' : 'h-80'}></div>
      <IGMLAB igmLab={data.igmLab} />
      <div id="spacer" className={matches ? 'h-20' : ' h-[280px]'}></div>
      <motion.div variants={wpic} initial="hidden" whileInView={'visible'}>
        <Wpic dir={data.dir} />
      </motion.div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[210px]'}></div>
      <Incubator incubator={data.incubator} />
      <div id="spacer" className={matches ? 'h-20' : 'h-[312px]'}></div>
      <motion.div variants={wpic} initial="hidden" whileInView={'visible'}>
        <Wpic dir={data.dir1} />
      </motion.div>
      <div id="spacer" className={matches ? 'h-20' : 'h-[210px]'}></div>
      <Ecard ecard={data.ecard} />
    </MainLayout>
  )
}

export default WhatWeDoing
