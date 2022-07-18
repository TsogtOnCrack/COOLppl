import Emphasis from 'components/ligature'
import Card from 'components/card'
import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from 'components/Button'
import { PADDINGX } from 'constants/layout'
import { motion } from 'framer-motion'

const IGMLAB = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const down = {
    hidden: {
      opacity: 0,
      y: -20,
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
    <div className={` ${PADDINGX}  max-w-shambWidth flex items-center flex-col justify-center`}>
      <motion.div
        variants={down}
        initial="hidden"
        whileInView={'visible'}
        className="grid grid-rows-2 place-items-center gap-[25px] mb-[150px]"
      >
        <Emphasis>
          <Typography variant={matches ? 'title-big' : 'h1'}>IGM ЛАБ</Typography>
        </Emphasis>

        <Typography
          className="text-primary-white opacity-60 max-w-[800px] text-center"
          variant={matches ? 'body-mobile' : 'body-web'}
        >
          IGM-н Лаборатори хэсэгт тухайн лабораторийн эрдэмтэд, судлаачид IGM-н дэд бүтцийг бүрдүүлэх гол туршилтын
          төслүүдийг цаашид хөгжүүлэх болно.
        </Typography>
      </motion.div>
      <div className="flex items-center justify-end w-full relative">
        <img
          src="../assets/igmlabs.webp"
          className="hidden md:block absolute right-[calc(52%)] z-0 opacity-60 w-[791px]"
          alt=""
        />

        <motion.div
          variants={up}
          initial="hidden"
          whileInView={'visible'}
          className="z-20 flex flex-col w-full items-end"
        >
          <Card
            headerEl={'IGM ЛАБ'}
            title={'Сэргээгдэх эрчим хүчний систем'}
            desc={
              'Нарны гэрэл, салхи гэх мэт эх үүсвэрүүдийн нөөц ямагт өөрчлөгддөг тул барилгын эрчим хүчний хэрэгцээг бүрэн хангаж чаддаггүйн улмаас Гравитацийн эрчим хүчний вольтийг эрчим хүчний шийдлүүдтэй хослуулах зориулалттай бүтээнэ. '
            }
            className={'py-12'}
            buttonEl={
              <Button variant="underline">
                <Typography variant="body-web">See more</Typography>
              </Button>
            }
            onClick={''}
          />

          <Card
            headerEl={'IGM ЛАБ'}
            title={'Хог хаягдлын тогтвортой менежментийн систем'}
            desc={
              'Бид хог хаягдлын менежментийн шинэлэг, тогтвортой хандлагыг судлах, хөгжүүлэхэд дэмжлэг үзүүлнэ. Төслийн анхан шатны үеэс эхлэн зах зээлд гаргахад шаардлагатай дэд бүтцээр хангах замаар бид тус дэмжлэгийг үзүүлэх болно.'
            }
            className={'py-12'}
            buttonEl={
              <Button variant="underline">
                <Typography variant="body-web">See more</Typography>
              </Button>
            }
            onClick={''}
          />
          <Card
            headerEl={'IGM ЛАБ'}
            title={'Хог хаягдлыг дахин боловсруулах үйл ажиллагаа'}
            desc={
              'Судалгаа, зах зээлд оршин тогтнох чадвар, Тогтвортой Хөгжлийн Зорилтуудад оруулах хувь нэмэр, хамгийн чухал нь дотоодын зах зээлд өргөжих боломж зэрэгт үндэслэн тогтвортой дэд бүтцийн төслүүдийг зориудаар сонгодог.'
            }
            className={'py-12'}
            buttonEl={
              <Button variant="underline">
                <Typography variant="body-web">See more</Typography>
              </Button>
            }
            onClick={''}
          />
        </motion.div>
      </div>
    </div>
  )
}
export default IGMLAB
