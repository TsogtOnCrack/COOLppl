import { HeadTextOfIcubator } from './headerText'
import { FirstText } from './firstText'
import { House } from './housePart'
import { Bench } from './bench'
import { Text2 } from './text2'
import { PADDINGX } from 'constants/layout'
import { Last } from './last'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const data = {
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

const Incubator = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`flex flex-col items-center max-w-shambWidth w-full `}>
      <HeadTextOfIcubator title={data.title} body={data.body} />
      <div className=" h-36"></div>
      <FirstText bigText={data.bigText1} subText={data.subText1} paragraph={data.paragraph1} />
      <div className=" h-36"></div>
      <House subText={data.subText2} bigText={data.bigText2} paragraph={data.paragraph2} />
      <div className=" h-36"></div>
      <Bench subText={data.bigText3} bigText={data.bigText3} paragraph={data.paragraph3} />
      <div className=" h-36"></div>
      <Text2 bigText={data.bigText4} paragraph={data.paragraph4} goals={data.goals} />
      <div className=" h-28 md:h-52"></div>
      <Last vari={matches ? 'title-small' : 'thin'} className={` px-0 md:${PADDINGX} !font-thin text-white/60 z-20 `}>
        {data.BIGTEXT}
      </Last>
      <div className=" h-36"></div>
    </div>
  )
}

export default Incubator
