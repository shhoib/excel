import Button from "../../Button";
import { FaFacebook,FaLinkedin  } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div className="flex items-end justify-center gap-24">
            <div>
                <div className="flex items-center py-7 pt-16">
                  <hr className="w-14 mr-5 border-violet-800"/>
                  <h1>CONTACT  US</h1>
                </div>
                <h1 className="text-4xl font-bold"> Do You Have <br/> any <span className="text-cyan-500">Questions ?</span></h1>
                <div className="mt-8">
                    <input type="text" placeholder="Name" className="border-[2px] p-2"/>
                    <input type="text" placeholder="Phone" className="border-[2px] p-2 ml-5"/>
                </div>
                 <input type="text" placeholder="Email" className="border-2 mt-4 p-2 w-full"/>
                 <div><textarea name="" id="" className="border-2 mt-4 p-2 w-full" placeholder="Your Message"></textarea></div>
                 <div className="flex items-end justify-end"> <Button text={'Send'}/> </div>
            </div>

            <div>
                <div>
                    <h6 className="text-gray-500 mb-2">ADDRESS</h6>
                    <h6>4th Main, MCHS Layout, Jakkur Road, <br/> Bengaluru-560064</h6>
                </div>
                <div className="mt-9">
                    <h6 className="text-gray-500 mb-2">EMAIL</h6>
                    <h6>info@excelprecast.com</h6>
                    <h6>ceo@excelprecast.com</h6>
                </div>
                <div className="mt-9">
                    <h6 className="text-gray-500 mb-2">PHONE</h6>
                    <h6>+91 89042 24014</h6>
                </div>
                <div className="flex text-cyan-500 my-7 gap-6">
                    <FaFacebook className="text-2xl"/>
                    <FaLinkedin className="text-2xl"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact