import Button from "../../Button";
import LogosMap from "./LogosMap";


const WhereWeWork = () => {
  return (
    <div className="flex flex-col items-center">
     <div className="w-3/4">
      <div className="flex items-center pt-10 pb-3">
         <hr className="w-14 mr-5 border-slate-800"/>
         <h2 className="font-semibold">WHERE WE WORK</h2>
      </div>
      <h1 className="text-cyan-500 text-4xl font-bold">Our Project <span className="text-black">Across</span> </h1>

    <div className="flex py-14">
      <div className="flex items-end gap-3 w-full">
        <img src="/images/building1.webp" alt="" loading="lazy" className="h-80"/>
        <img src="/images/building2.webp" alt="" loading="lazy" className="h-72"/>
        <img src="/images/building3.webp" alt="" loading="lazy" className="h-96"/>
      </div>

      <div className="flex flex-col justify-between items-start">
        <h4 className="mt-4">We are dedicated to deliveringprecise ans efficient solutions that meet our client's needsand exceed their expectations.We have projects all over India and our goal is to help turn your vision in to reality.</h4>
        <div>
         <h1 className="text-6xl text-cyan-500 font-bold">2.437 Million +</h1>
         <h4>Completed and Active Projects</h4>
        </div>
        <Button text={'SEE OUR PROJECTS'}/>
      </div>
    </div>

     </div>

     <div className="bg-[rgb(233,233,233)] w-full flex items-center justify-center">
      <LogosMap/>
     </div>
    </div>
  )
}

export default WhereWeWork