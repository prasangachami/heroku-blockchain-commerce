import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const AboutUsContainer = () => {
    return(
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar/>
                <AboutUs />
            </div>
            <Footer/>
      </div>
    )
}

export default AboutUsContainer;