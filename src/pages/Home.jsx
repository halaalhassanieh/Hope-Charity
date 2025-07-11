import React from 'react'
import Hero from '../components/Hero'
import { heroInfo,hero2Info,CatCardInfo } from '../constants/Constants.jsx'
import InfoBlock from '../components/InfoBlock'
import sideimg from"/assets/sideimg.jpeg"
import HomeCatCard from '../components/HomeCatCard'
import LatestNews from '../components/LatestNews.jsx'



const Home = () => {

  return (
    <div>

      <Hero title1={heroInfo.title1} title2={heroInfo.title2} subtilte={heroInfo.subtitle} buttonName={heroInfo.buttonName} buttonPath={heroInfo.buttonPath}  />

      <InfoBlock sideimg={sideimg} title={hero2Info.title} subtitle={hero2Info.subtitle} lines={hero2Info.lines} />

      <div className='bg-gray/100'>
        
      <div className='custom-container  flex xl:flex-row flex-col  justify-center items-center gap-10 xl:py-[60px] py-10'>

         {
          CatCardInfo.map((e,i)=>{
            return(
            <HomeCatCard key={e.id} icon={e.icon} title={e.title} subtitle={e.subtitle}/>
          )
          })
         }
            
         </div>
      </div>
       <LatestNews/>
    </div>
  )
}

export default Home
