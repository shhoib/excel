import Marquee from "react-fast-marquee";

const logosData = [
  {
    id:1,
    image : '/images/bharath.webp'
  },
  {
    id:2,
    image : '/images/british.webp'
  },
  {
    id:3,
    image : '/images/godrej.webp'
  },
  {
    id:4,
    image : '/images/tata.webp'
  },
  {
    id:5,
    image : '/images/suraksha.webp'
  },
]

const LogosMap = () => {
  return (
    <Marquee>
     <div  className="flex items-center justify-center">
      {
        logosData.map((data)=>{
          return (
            <div key={data.id}>
              <img src={data.image} alt={data.image} className="w-40 aspect-[3/2] object-contain mix-blend-darken m-5 mx-9	" loading="lazy"/>
            </div>
          )
        })
      }
     </div>
    </Marquee>
  )
}

export default LogosMap;