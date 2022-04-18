import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const ProductsContainer = () => {
    const {id} = useParams();
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar/>
                <Products categoryId={id}/>
            </div>
            
            <Footer/>
        </div>
    );
}

export default ProductsContainer;