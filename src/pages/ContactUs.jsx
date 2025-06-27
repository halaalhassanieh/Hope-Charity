import React from 'react'
import PageHeader from '../components/ui/PageHeader'
import { ContactUsHead } from '../constants/Constants'

const ContactUs = () => {
  return (
    <div>
      
      <PageHeader page={ContactUsHead.page} title={ContactUsHead.title} subtitle={ContactUsHead.subtitle}/>
      
    </div>
  )
}

export default ContactUs
