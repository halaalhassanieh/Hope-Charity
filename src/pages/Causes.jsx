import React from 'react'
import CausesCatCard from '../components/CausesCatCard'
import { CatCardInfo } from '../constants/Constants.jsx'

const Causes = () => {
  return (
    <div>

      <div className='bg-gray/100'>
        
      <div className='custom-container  flex xl:flex-row flex-col justify-center items-center gap-10 xl:py-[60px] py-10 '>

         {
          CatCardInfo.map((e,i)=>{
            return(
            <CausesCatCard key={e.id} icon={e.icon} title={e.title} subtitle={e.subtitle}/>
          )
          })
         }
            
         </div>
    
      </div>
      </div>
  )
}

export default Causes
