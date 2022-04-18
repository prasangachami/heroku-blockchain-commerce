import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Category from '../components/Category';
import ProductFeature from '../components/ProductFeature';
import dummyCategory from '../utills/dummyCategory';
import dummyProductsData from '../utills/dummyProductsData';
import Products from '../components/Products';

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';

const HomeContainer = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar/>
                <Welcome/>
                <Category title = {"Food Category"} dummyCategory= {dummyCategory} />
                {/* <Category title = {"Featured Foods"} dummyCategory= {dummyProductsData} /> */}
                <Products title = {"Featured Foods"} categoryId={"featured"}/>
                <ProductFeature />
            </div>
            <Footer/>
      </div>
    );
}

export default HomeContainer;