import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ContactUsForm from "../components/ContactUsForm";

const ContactUsContainer = () => {
    return(
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar/>
                <ContactUs />
                <ContactUsForm />
            </div>
            <Footer/>
      </div>
    )
}

export default ContactUsContainer;