import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductView from '../components/ProductView';
import { useParams } from 'react-router-dom';


const ProductViewContainer = () => {
    const { id } = useParams();
    // const [ id, setId] = useState(0);
    // console.log("Product id", id);

    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar/>
                <ProductView id={id}/>
            </div>
            
            <Footer/>
        </div>
    );
}

export default ProductViewContainer;