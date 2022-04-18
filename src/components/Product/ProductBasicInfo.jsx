import { ProductContext } from "../../context/ProductContext";
import { useContext, useState } from "react";
import Loader from "../Loaders/Loader";

const ProductBasicInfo = () => {

    const { connectWallet, currentAccount, formData, setFormData,  handleChange, isLoading, sendTransaction } = useContext(ProductContext);
    const { code, productName, productDescription, amount, keyword, receiver, sender } = formData;

    const Input = ({placeholder, name, type, value, handleChange}) => (
        <input 
            placeholder={placeholder}
            name={name}
            type={type}
            step="0.0001"
            value={value}
            onChange={(e) => handleChange(e, name)}
            className="my-2 w-full border-[1px] p-2 text-sm"
        />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!currentAccount || !code || !productName || !productDescription || !amount || !keyword ) return;
        // setFormData({ receiver : currentAccount, sender : null});
        setFormData((prevState)=>({ ...prevState, sender: currentAccount }));

        console.log("Click send button", formData);
        sendTransaction();
    }

    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Product Details</h3>
                        <p className="mt-1 text-sm text-gray-600">Add product details to show in the product list for buy and sell.</p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="p-5 sm:w-95 w-full flex flex-col justify-start items-center ">
                        <Input placeholder="Enter product code" name="code" value={code} type="text" handleChange={handleChange} /> 
                        <Input placeholder="Enter product name" name="productName" value={productName} type="text" handleChange={handleChange} />
                        <Input placeholder="Enter product description" name="productDescription" value={productDescription} type="text" handleChange={handleChange} />
                        {/* <Input placeholder="Address To" name="addressTo" value={addressTo} type="text" handleChange={handleChange} /> */}
                        <Input placeholder="Amount (ETH)" name="amount" value={amount} type="number" handleChange={handleChange} />
                        <Input placeholder="Remarks" name="keyword" value={keyword} type="text" handleChange={handleChange} />
                    
                        <div className="h-[1px] w-full bg-gray-400 my-2"/>

                            { isLoading ? (
                                <Loader />
                                ) : (
                                    <button 
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full mt-2 border-[1px] p-2 border-[#3d4f7c] cursor-pointer">
                                        Save
                                    </button>
                                ) 
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductBasicInfo;