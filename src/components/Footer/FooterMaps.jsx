/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FooterMaps = ({data,weight}) => {
  return (
    <div className="flex mt-2">
      <MdOutlineKeyboardArrowRight className="text-cyan-500"/>
      <h6 className={`text-[12px] ${weight}`}>{data.text}</h6>
    </div>
  )
}

export default FooterMaps