import Banner from "../components/Banner/Banner"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import Reviews from "../components/Reviews/Reviews"
import WhatWeDo from "../components/WhatWeDo/WhatWeDo"
import WhereWeWork from "../components/WhereWeWork/WhereWeWork"

const LandingPage = () => {
  return (
    <div>
      <Banner/>
      <WhatWeDo/>
      <WhereWeWork/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage