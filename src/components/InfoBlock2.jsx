
const InfoBlock2 = ({sideimg,title,subtitle}) => {
  return (
        <div className="custom-container xl:flex block items-center gap-[40px] xl:py-[120px] py-[90px] font-vietnam">

      <div className="w-full flex justify-center items-center">
        <img className="rounded-[20px] xl:w-full w-3/4" src={sideimg} alt="" /></div>


      <div className="w-full flex flex-col justify-center items-center
       px-12 xl:py-0 py-6 ">

        <h1 className=" custom-3xl:text-[60px] custom-2xl:text-[50px] custom-xl:text-[45px] text-[35px]
                font-bold xl:text-left text-center">
          {title}</h1>

        <p className=" font-normal  text-gray/600 
                custom-2xl:text-xl text-base
                custom-2xl:py-10 custom-tap:py-7 py-6 
                xl:text-left text-center">
          {subtitle}</p>

        <div className="flex gap-10 xl:justify-start justify-center items-center">
          
        </div>
      </div>

    </div>
  )
}

export default InfoBlock2
