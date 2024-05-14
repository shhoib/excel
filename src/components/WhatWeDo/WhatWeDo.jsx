import MarqueeContainer from "./MarqueeContainer"
import PrecastMap from "./PrecastMap"

const precastData = [
    {
        id:'01',
        img : '/images/precastIMG1.webp',
        heading : 'Total Precast',
        subHeading : 'At Excel Precast Solutions, we are your dedicated complete precast solutions partner, committed to simplifying your construction journey for both residential and commercial projects.'
    },
    {
        id:'02',
        img : '/images/precastIMG2.webp',
        heading : 'Hybrid Precast',
        subHeading : 'At Excel Precast Solutions, we introduce a cutting-edge approach to construction with our Hybrid Precast Solution Model, blending precast elements’ efficiency with conventional construction’s flexibility.'
    }
]
const WhatWeDo = () => {
  return (
    <div>
    <div className="flex justify-center">
     <div className="w-2/3">
       <div className="flex items-center py-10">
         <hr className="w-14 mr-5 border-slate-800"/>
         <h2 className="font-semibold">WHAT WE DO</h2>
       </div>
      <h1 className="text-4xl font-bold">Multi-Disciplined <br/> Construction <span className="text-cyan-500">Solutions</span> </h1>

     <div className="flex gap-9 mt-10">
      {
          precastData.map((data)=>{
              return(
                <PrecastMap key={data.id} data={data}/>
            )
        })
     }
     </div>
     </div>
    </div>

    <div className="bg-[rgb(0,31,63)] h-full text-white">

      <div className="ml-[15%]">
      <div className="flex items-center pt-10 pb-5">
         <hr className="w-14 mr-5 border-6 border-violet-800"/>
         <h2 className="font-semibold">WHAT WE DO</h2>
       </div>
       <h1 className="text-3xl font-bold">Our Products</h1>
      </div>

      <MarqueeContainer/>

    </div>

    </div>
  )
}

export default WhatWeDo