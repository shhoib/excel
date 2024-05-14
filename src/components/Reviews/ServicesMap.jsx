/* eslint-disable react/prop-types */

const ServicesMap = ({data}) => {
  return (
    <div className="border-[1px] px-7 py-3 rounded-xl w-[16%] min-h-36">
        <h6 className="text-2xl my-2 font-[1px] text-cyan-500">{data.icon}</h6>
        <h5 className="font-extralight text-[15px]">{data.text}</h5>
    </div>
  )
}

export default ServicesMap