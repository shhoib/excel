/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";


const PrecastMap = ({data}) => {
  return (
    <div className="flex flex-col items-end">
    <div className="border-[1px] border-slate-300 pb-8">
       <h6 className="text-5xl font-bold text-slate-300 p-3">{data.id}</h6>
       <div className="flex items-center justify-center">
         <img src={data.img} alt="" className="h-80"/>
       </div>
         <h1 className="text-3xl font-bold text-left p-5 px-7">{data.heading}</h1>
         <h2 className="text-sm px-7">{data.subHeading}</h2>
    </div>
    <h5 className="flex items-center text-sm text-cyan-500 py-3 pr-1">DETAILS <BsArrowRight className="ml-2"/></h5>
    </div>
  )
}

export default PrecastMap