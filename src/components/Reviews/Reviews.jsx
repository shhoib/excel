import { MdCheck } from "react-icons/md";
import { SlLayers } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDeviceAnalytics,TbCirclesRelation  } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import ServicesMap from "./ServicesMap";

const serviceData = [
    {
        id : 1,
        icon : <SlLayers/>,
        text : 'We Develop U ique Projects'
    },
    {
        id : 2,
        icon : <IoSettingsOutline/>,
        text : 'We Value Convenience and Functionality'
    },
    {
        id : 3,
        icon : <TbDeviceAnalytics/>,
        text : 'Experience Allows Us to Implement New Ideas'
    },
    {
        id : 4,
        icon : <HiOutlineLightBulb/>,
        text : 'We Offer Innovative Technologies'
    },
    {
        id : 5,
        icon : <TbCirclesRelation />,
        text : 'We Focus on Long-term Relationships'
    },
]

const Reviews = () => {
  return (
    <div>
        <div className="bg-[rgb(0,31,63)] text-white">

          <div className="flex justify-around items-end pt-5">
            <div>
                <div className="flex items-center py-8">
                    <hr className="w-14 mr-5 border-violet-800"/>
                    <h1>WHY  CHOOSE  US</h1>
                </div>
                <h1 className="text-4xl font-bold"><span className="text-cyan-500">Designing</span> Future <br/> with Excellence</h1>
            </div>
            <div>
              <h6 className="flex gap-4 items-center"><MdCheck className="text-cyan-500"/>Building the future with unique ideas</h6>
              <h6 className="flex gap-4 items-center"><MdCheck className="text-cyan-500"/>Designing future with excellence</h6>
              <h6 className="flex gap-4 items-center"><MdCheck className="text-cyan-500"/>Discovering possibility in concrete</h6>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center py-14">
            {
              serviceData.map((data)=>{
                return(
                 <ServicesMap data={data} key={data.id}/>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default Reviews