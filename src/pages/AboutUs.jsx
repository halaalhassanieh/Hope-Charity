import React from 'react'
import PageHeader from '../components/ui/PageHeader'
import { AboutUsHead } from '../constants/Constants'

const AboutUs = () => {
  return (
    <div>
      
      <PageHeader page={AboutUsHead.page} title={AboutUsHead.title} subtitle={AboutUsHead.subtitle}/>
       
    </div>
  )
}

export default AboutUs
