import Typography from 'components/typography'
import Emphasis from 'components/ligature'

const data = {
  title: ' IGM ИНКУБАТОР',
  body: 'IGM-н Инкубатор хөтөлбөр нь ирээдүйн тогтвортой/ногоон технологи дээр суурилсан гарааны бизнесүүд болон компаниуд руу чиглэж, тэдэнд хамтран ажиллах коворкинг оффисыг санал болгох болно.',
}

export const TextOfIcubator = () => {
  return (
    <div className=" flex flex-col justify-center">
      <Emphasis>
        <Typography variant="h1">{data.title}</Typography>
      </Emphasis>
      <Typography className="text-primary-white opacity-60 max-w-[800px] text-center" variant={'body-web'}>
        {data.body}
      </Typography>
    </div>
  )
}
