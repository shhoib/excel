/* eslint-disable react/prop-types */

const Button = ({text}) => {
  return (
    <button className="bg-cyan-500 hover:bg-cyan-300 text-slate-900 my-2 p-3 px-5 rounded-md text-sm font-semibold">
    {text}
   </button>
  )
}

export default Button