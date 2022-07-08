import { IgmSecondPart, Shartseg, Incubator } from 'components'
import { IGMLAB } from 'components'
import { MainLayout } from 'layout'

const Turshilt = () => {
  return (
      <MainLayout classname = " h-fit flex flex-col items-center bg-[#202121]">
        <Shartseg size={10} tsatsrag={20} />
        <IgmSecondPart />
        <IGMLAB />
        <div className=" h-44"></div>
        <Incubator />
      </MainLayout>
  )
}
export default Turshilt
