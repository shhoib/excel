import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { FaFacebook,FaLinkedin  } from "react-icons/fa";
import FooterMaps from "./FooterMaps";

const linksData = [
    {
        id : 1,
        text : 'ABOUT'
    },
    {
        id : 2,
        text : 'SERVICES'
    },
    {
        id : 3,
        text : 'PROJECTS'
    },
    {
        id : 4,
        text : 'CONTACT US'
    },
]
const products1Data = [
    {
        id : 1,
        text : 'BEAMS'
    },
    {
        id : 2,
        text : 'STAIRCASE'
    },
    {
        id : 3,
        text : 'COLUMNS'
    },
    {
        id : 4,
        text : 'PRESTRESSED SOLID SLABS'
    },
    {
        id : 5,
        text : 'RETAINING WALLS'
    },
]
const products2Data = [
    {
        id : 1,
        text : 'BOUNDARY WALLS'
    },
    {
        id : 2,
        text : 'ELECTRICAL & DRAINAGE CHANNEL'
    },
    {
        id : 3,
        text : 'INSPECTION CHAMBERS'
    },
    {
        id : 4,
        text : 'WALL PANELS'
    },
    {
        id : 5,
        text : 'COLORED PANELS'
    },
]

const Footer = () => {
  return (
    <div className="bg-[rgb(0,31,63)] text-white flex items-start justify-center py-20 gap-16">
        <div className="text-[15px]">
            <div className="flex ">
                <BsTelephone className="m-2 text-cyan-500"/>
                <div>
                    <h6>1 - 313 - 645 - 3395</h6>
                    <h6>1 - 469 - 970 - 2609</h6>
                </div>
            </div>
            <div className="flex my-6">
                <TfiLocationPin className="m-2 text-cyan-500"/>
                <h6>2047 Cyrus Viaduct <br/>East Jadynchester</h6>
            </div>
            <div className="flex text-cyan-500 ml-5 gap-4">
             <FaFacebook className="text-xl"/>
             <FaLinkedin className="text-xl"/>
            </div>
            <h6 className="mt-9 text-[13px]">© 2024 Excel Precast Solutions Pvt. Ltd.</h6>
        </div>

        <div className="flex gap-9">
           <div>
             <h1 className="text-2xl font-extralight mb-6">Quick Links</h1>
             <div>
                {
                  linksData.map((data)=>{
                    return (
                        <FooterMaps data={data} weight='font-bold' key={data.id}/>
                    )
                  })
                }
             </div>
           </div>

           <div>
           <h1 className="text-2xl font-extralight mb-4">Our Products</h1>
            <div className="flex gap-3">
                <div>
                {
                  products1Data.map((data)=>{
                    return (
                    <FooterMaps data={data} weight='font-thin' key={data.id}/>
                    )
                  })
                }  
                </div>
                <div>
                {
                  products2Data.map((data)=>{
                    return (
                    <FooterMaps data={data} key={data.id}/>
                    )
                  })
                }  
                </div>
                <div></div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer