import { Wpic } from 'components'
import { TextOfIcubator } from './text'

const data = {
  dir: 'assets/incubatorPicture.jpg',
}

const Incubator = () => {
  return (
    <div className=" flex flex-col items-center">
      <Wpic dir={data.dir} />
      <div className=" h-44"></div>
      <TextOfIcubator />
    </div>
  )
}

export default Incubator
