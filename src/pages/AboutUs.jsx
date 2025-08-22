import React from 'react'
import PageHeader from '../components/ui/PageHeader'
import { AboutUsHead ,hero3Info } from '../constants/Constants'
import InfoBlock2 from '../components/InfoBlock2'
import sideimg from "/assets/sideimg.jpeg"

const AboutUs = () => {
  return (
    <div>
      
      <PageHeader page={AboutUsHead.page} title={AboutUsHead.title} subtitle={AboutUsHead.subtitle}/>
       <InfoBlock2 sideimg={sideimg} title={hero3Info.title} subtitle={hero3Info.subtitle}/>
    </div>
  )
}

export default AboutUs
