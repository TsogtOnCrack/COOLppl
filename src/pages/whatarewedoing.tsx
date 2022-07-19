import {} from 'react'
import { MainLayout } from 'layout'
import { Modd, Arttech } from 'components'
import { Easy } from 'components/telmun/arttecheasy'
import Apart from 'components/telmun/tusdaa'
import Text from 'components/text/text1'

const data = {
  artech: {
    title: 'ART TECH EMPIRE',
    subTitle:
      'In 2056, an international engineering and research institute will be established in Mongolia that meets the Sustainable Development Goals.',
    locationThing: {
      icon: 'nav',
      loc: 'Dornogobi aimag',
    },
  },
text: {
    years :[
      {
        title : "816 year",
        subTitle : "816th anniversary of the Great Mongol Empire"
      },
      {
        title : "2231 year",
        subTitle : "2231th anniversary of Foundation of the first Mongolian Statehood"
      },
      {
        title : "101 year",
        subTitle : "101th anniversary of the People’s Revolution of Mongolia"
      },
    ],
    afterYearsText : 'As part of these celebrations, historians, scientists and engineers are working together to create a 36,000-tree "Art-Tech Empire" Land in the desert region.',
  
    lastText : {
      first : "This Land Art is the second largest Land Art in the world made of planted trees and will be the largest Land Art by size. It is also being sold as",
      highlight : '"HAPPY TREE"',
      end : "set in cooperation with the Trade and Development Bank.",
    },
  },
  modd :{
    title: {
      small : "Price per tree",
      big : "80,000 MNT"
    },
    list: [
      { icon: 'users', text: 'Digital certificate of the tree owner' },
      { icon: 'creditcard', text: 'Smart name card' },
      { icon: 'heart', text: '35 years of tree care, watering and guarding' },
      { icon: 'star', text: 'Trade and Development Bank BRITTO classic card' },
      { icon: 'pulse', text: '2-year-old elm tree' },
    ],
  },
easy: {
    header : "The land art is in the form of an ancient Choijun seal, which symbolizes the fact that the three great mandalas, man, heaven and earth, are flexible and flexible in the ongin seal or sun seal.",

    iconThing : {
      icon : "assets/arc.webp",
      head : "Хээ",
      body : "Чойжүн тамганы хээ",
    }
  },
  apart: "In the past, we Mongolians have achieved everything we set out to do by calling for human power, the crest of the heavens, and the blessings of the earth. But now we are expressing the idea that we will achieve our goal of building a new empire by combining art and technology."
}

const WhatWeDoing = () => {
  return (
    <>
      <MainLayout classname={'bg-backgroundColor-darkGray'}>
        <Arttech data={data.artech} />
        <Text data = {data.text} />
        <Modd data = {data.modd}/>
        <Easy data = {data.easy} />
        <Apart data = {data.apart} />
      </MainLayout>
    </>
  )
}

export default WhatWeDoing
