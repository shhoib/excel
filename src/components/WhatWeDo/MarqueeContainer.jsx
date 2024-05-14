import Marquee from "react-fast-marquee";

const marqueeData = [
  {
    id : 1,
    img : "images/beam.webp",
    name : 'Beam'
  },
  {
    id : 2,
    img : "images/column.webp",
    name : 'Column'
  },
  {
    id : 3,
    img : "images/slab.webp",
    name : 'Slab'
  },
  {
    id : 4,
    img : "images/stair.webp",
    name : 'Staircase'
  },
]
const MarqueeContainer = () => {
  return (
    <Marquee gradient gradientColor="rgb(0,31,63)" >
      <div className="flex h-full p-14 relative">
        {
          marqueeData.map((item)=>{
            return (
              <div key={item.id} className="bg-[rgb(44,67,91)] h-40 w-56 mx-14">
               <div className=" flex items-center justify-center">
                <img src={item.img} alt="" loading="lazy" className="relative bottom-10 scale-125 h-48 hover:scale-150 transition-all duration-300"/>
               </div>
               {/* <h2 className="my-2">{item.name}</h2>
               <hr /> */}
              </div>
            )
          })
        }
      </div>
    </Marquee>
  )
}

export default MarqueeContainer;