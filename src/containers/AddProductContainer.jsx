import Navbar from "../components/Navbar";
import ProductBasicInfo from "../components/Product/ProductBasicInfo";
import ProductInformation from "../components/Product/ProductInformation";
import ProductPrice from "../components/Product/ProductPrice";
import Footer from "../components/Footer";

// import { ProductContext } from "../context/ProductContext";
import { useContext, useState } from "react";

const AddProductContainer = () => {

    // const { connectWallet, currentAccount, formData, setFormData} = useContext(ProductContext);

    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> 
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Add New Product</h2>

                        <div className="mt-6 ">
                            <ProductBasicInfo />
                            {/* <div className="hidden sm:block" aria-hidden="true">
                                <div className="py-5">
                                <div className="border-t border-gray-200" />
                                </div>
                            </div>
                            <ProductInformation />
                            <div className="hidden sm:block" aria-hidden="true">
                                <div className="py-5">
                                <div className="border-t border-gray-200" />
                                </div>
                            </div>
                            <ProductPrice /> */}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
}

export default AddProductContainer;