import Emphasis from 'components/ligature'
import Card from 'components/card'
import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
<<<<<<< HEAD
import Button from 'components/Button'
import { PADDINGX } from 'constants/layout'
import { Wpic } from 'components'

const data = {
  dir: 'assets/incubatorPicture.jpg',
}

const IGMLAB = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`flex items-center flex-col justify-center`}>
      <div className="grid grid-rows-2 place-items-center gap-[25px] mb-[150px]">
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
      </div>
      <div className="flex items-center relative -left-[10%]">
        <img src="../assets/igmlabs.webp" className="hidden md:inline opacity-60 w-[791px] mr-[148px]" alt="" />
        <div className="grid grid-rows-3 gap-y-[157px]">
          <Card
            headerEl={'IGM ЛАБ'}
            title={'Сэргээгдэх эрчим хүчний систем'}
            desc={
              'Нарны гэрэл, салхи гэх мэт эх үүсвэрүүдийн нөөц ямагт өөрчлөгддөг тул барилгын эрчим хүчний хэрэгцээг бүрэн хангаж чаддаггүйн улмаас Гравитацийн эрчим хүчний вольтийг эрчим хүчний шийдлүүдтэй хослуулах зориулалттай бүтээнэ. '
            }
            className={''}
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
            className={''}
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
            className={''}
            buttonEl={
              <Button variant="underline">
                <Typography variant="body-web">See more</Typography>
              </Button>
            }
            onClick={''}
          />
=======
import Button from "components/Button";
import { PADDINGX } from "constants/layout";




const IGMLAB = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <div className={` ${PADDINGX}  max-w-shambWidth flex items-center flex-col justify-center`}>
            <div className="grid grid-rows-2 place-items-center gap-[25px] mb-[150px]">
                <Emphasis>
                    <Typography variant={matches ? 'title-big' : 'h1'}>IGM ЛАБ</Typography>
                </Emphasis>
                <Typography className="text-primary-white opacity-60 max-w-[800px] text-center" variant={matches ? 'body-mobile' : 'body-web'}>IGM-н Лаборатори хэсэгт тухайн лабораторийн эрдэмтэд, судлаачид IGM-н дэд бүтцийг бүрдүүлэх гол туршилтын төслүүдийг цаашид хөгжүүлэх болно.</Typography>
            </div>
            <div className='flex items-center justify-end w-full relative'>

                <img src="../assets/igmlabs.webp" className="hidden md:block absolute right-[calc(52%)] z-0 opacity-60 w-[791px] " alt="" />
                <div className="z-20 flex flex-col w-full items-end">
                    <Card
                        headerEl={"IGM ЛАБ"}
                        title={"Сэргээгдэх эрчим хүчний систем"}
                        desc={"Нарны гэрэл, салхи гэх мэт эх үүсвэрүүдийн нөөц ямагт өөрчлөгддөг тул барилгын эрчим хүчний хэрэгцээг бүрэн хангаж чаддаггүйн улмаас Гравитацийн эрчим хүчний вольтийг эрчим хүчний шийдлүүдтэй хослуулах зориулалттай бүтээнэ. "}
                        className={"py-12"}
                        buttonEl={
                            <Button variant="underline">
                                <Typography variant="body-web" >See more</Typography>
                            </Button>
                        }
                        onClick={""} />
                    <Card
                        headerEl={"IGM ЛАБ"}
                        title={"Хог хаягдлын тогтвортой менежментийн систем"}
                        desc={"Бид хог хаягдлын менежментийн шинэлэг, тогтвортой хандлагыг судлах, хөгжүүлэхэд дэмжлэг үзүүлнэ. Төслийн анхан шатны үеэс эхлэн зах зээлд гаргахад шаардлагатай дэд бүтцээр хангах замаар бид тус дэмжлэгийг үзүүлэх болно."}
                        className={"py-12"}
                        buttonEl={
                            <Button variant="underline">
                                <Typography variant="body-web" >See more</Typography>
                            </Button>
                        }
                        onClick={""} />
                    <Card
                        headerEl={"IGM ЛАБ"}
                        title={"Хог хаягдлыг дахин боловсруулах үйл ажиллагаа"}
                        desc={"Судалгаа, зах зээлд оршин тогтнох чадвар, Тогтвортой Хөгжлийн Зорилтуудад оруулах хувь нэмэр, хамгийн чухал нь дотоодын зах зээлд өргөжих боломж зэрэгт үндэслэн тогтвортой дэд бүтцийн төслүүдийг зориудаар сонгодог."}
                        className={"py-12"}
                        buttonEl={
                            <Button variant="underline">
                                <Typography variant="body-web" >See more</Typography>
                            </Button>
                        }
                        onClick={""} />
                </div>

            </div>
            
>>>>>>> a026d6648bf0486844cc3311d57aae53eb3cef27
        </div>
      </div>
      <div id="spacer" className={matches ? 'h-20' : ' h-[280px]'}></div>
      <Wpic dir={data.dir} />
    </div>
  )
}
export default IGMLAB
