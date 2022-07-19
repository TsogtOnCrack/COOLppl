import { MainLayout } from 'layout'
import Fournumber from 'components/telmun/hedentoo'
import FirstPart from 'layout/indexPageComponents/first'
import OurGoalsPart from 'layout/indexPageComponents/ourGoalsPart'
import Titi from 'layout/bobo'
import CardWithIconn from './style/cardWithIcon'

import { Plans } from 'components/Plans'
import { Info } from 'components'
import Whatarewedoing from './style/globeCard'

const data = {
  //first part
  firstPart: {
    bgImage: 'assets/homePageBg.webp',
    logoPath: 'assets/homelogo.webp',
    text: ' In 2056, an international engineering and research institute will be established in Mongolia that meets theSustainable Development Goals.',
  },

  //Titi
  titi: {
    content: [
      {
        headerEl: 'our new project',
        title: 'Art Tech Empire',
        desc: '"Art-Tech Empire" land art with 36,000 trees will be created on 5 hectares of the Shambala 2056 project area.',
      },
      {
        headerEl: 'our new project',
        title: 'Why Gobi ?',
        desc: "77% of Mongolia's territory is affected by desertification, and if no specific measures are taken, 92% of Mongolia's territory is expected to be desertified by 2080.",
      },
    ],

    //constant
    seeMore: 'See more',
  },

  //CardWithIconn
  cardWithIconn: {
    //constants

    header: 'Terrain Features',

    four: [
      {
        headerEl: 'riDirection',
        title: 'Roads & Infrastructure',
        desc: 'Asian Highway 3 - Zamyn-Uud and Tavan Tolgoi Zuunbayan railways, oil refinery, wind farm.',
      },
      {
        headerEl: 'leaf',
        title: 'Opportunity to run a greenhouse',
        desc: 'Able to work all year round. It is more suitable for Mongolian conditions, has relatively low cost, easily retains heat for a long time, and has a lot of potential to use solar energy.',
      },
      {
        headerEl: 'lightning',
        title: 'Renewable energy resources',
        desc: 'In the Gobi region, the time of sunshine is 2900-3000 hours and the amount of solar energy per square meter is 5.5-6.0 kW * h / m2 per day.',
      },
      {
        headerEl: 'mapPin',
        title: 'Geographical Location',
        desc: 'Zamiin-Uud and Khangii border crossings in Dornogovi aimag are the largest border crossings from Mongolia to China. In summer, the average wind speed is 4.2-4.6 m/sec, with temperatures reaching +41 degrees celsius.',
      },
    ],
  },

  //Fournumber
  fournumbers: [
    { suf: '', number: '24533', text: 'Tree' },
    { suf: '', number: '7200', text: 'Reserved water' },
    { suf: 'm2', number: '4000', text: 'Restored' },
    { suf: '', number: '166133', text: 'Organic access' },
  ],

  //Plans
  plans: {
    title: 'Our future plan',
    date: '2020 - 2032',

    listOfPlans: [
      {
        act: true,
        head: 'The first four years',
        body: 'A Green zone will be established on an area of 16 hectares.',
        date: 'Apr 15, 2020 - Nov 1, 2024',
        icon: 'location',
      },
      {
        act: false,
        head: 'The second four years',
        body: 'The infrastructure of the Renewable Energy Research Center.',
        date: 'Apr 15, 2020 - Nov 1, 2024',
        icon: 'plane',
      },
      {
        act: false,
        head: 'The third four years',
        body: 'The Research Center building and other construction will be completed.',
        date: 'Apr 15, 2020 - Nov 1, 2024',
        icon: 'rocket',
      },
    ],

    //OurGoals
  },

  //info
  info: {
    list: [
      { num: '2832000', suf: '', text: 'Produced Oxygen' },
      { num: '494', suf: 'тн', text: 'GENERATED BIOMASS' },
      { num: '539726', suf: 'кг', text: 'ABSORBED CARBON' },
    ],
  },
  ourGoals: {
    header: 'Our Goals',
    goals: [
      { tect: 'Renewable energy infrastructure will be developed in Dornogovi aimag.' },
      { tect: 'Land degradation will be prevented within the framework of the Sustainable Development Goals.' },
      { tect: 'Rehabilitate by establishing green zones in accordance with the specifics of desertified areas.' },
      { tect: 'Support domestic technological innovation.' },
    ],
  },

  //what are we doing?
  whatAreWeDoing: {
    header: 'What are we doing ',
    list: [
      {
        head: 'Agro-Tech research',
        body: 'The source of desertification caused by natural and other factors is studied by team researchers and engineers on site.',
      },

      {
        head: 'Intersectoral integration',
        body: 'The tree irrigation system has been cleverly designed to provide automatic irrigation with minimal water consumption.',
      },
      {
        head: 'Desertification rehabilitation // Land Art',
        body: 'At our project site, 24,000 elm trees are grown and irrigated away from the infrastructure. We are planting trees in the form of Land Art without compromising their ability to grow.',
      },
      {
        head: 'Organic Marketing',
        body: 'Our customers and social media followers are an effective tool for promoting the products and services of our partners in the market. We have successfully organized a marketing campaign that highlights the joint efforts of our partners to address desertification in the arts.',
      },
    ],
  },
}

// import { Easy } from 'components/telmun/arttecheasy'
import Urs from 'components/telmun/urs'
// import Apart from 'components/telmun/tusdaa'
export default function Home() {
  return (
    <MainLayout classname={'bg-mainBg'}>
      <FirstPart data={data.firstPart} />
      <Titi data={data.titi} />
      <CardWithIconn data={data.cardWithIconn} />
      <Fournumber data={data.fournumbers} />
      <Plans data={data.plans} />
      <Info data={data.info} />
      <OurGoalsPart data={data.ourGoals} />
      <Whatarewedoing data={data.whatAreWeDoing} />
      <Urs />
    </MainLayout>
  )
}
