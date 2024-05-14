import Button from "../../Button";


const Banner = () => {

  return (
    <div>
      <div className="bg-[url('/images/banner.webp')] bg-cover bg-center text-white">

       <div className="flex items-center pt-14">
         <hr className="w-1/5 border-cyan-500" />
         <h4 className="py-2 m-4 font-bold">INNOVATIVE.RELIABLE.</h4>
       </div>

       <div className="flex items-end justify-around">
         <div className=" px-14 pb-14">
           <h1 className="text-7xl font-bold pb-5"> Let's Build <br /> The Future <br /> Together</h1>
           <h3 className="py-3"> At Excel Precast Solutions, we take pride in <br /> revolutionizin the construction industry through <br /> out cutting-edge precast concrete solutions.</h3>
            <Button text={'CONTACT US'}/>
         </div>

        <div className="py-14 ml-14 text-right">
          <h1 className="text-5xl font-bold text-cyan-500">2.473</h1>
          <h6 className="text-base font-bold"> Million Sq.ft <br /> completed in 2022-24</h6>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Banner;
