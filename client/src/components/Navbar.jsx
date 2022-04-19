
import { useState, useContext } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo-main.png';
import { Link } from 'react-router-dom';
import { ProductContext } from "../context/ProductContext";
 
const NavbarItems = ({ title, link, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>
        <a href={link}>
            {title}
        </a>
    </li>
);


const navBarItemsList = [
    {
        "name": "Products",
        "path": "/products/0"
    },
    {
        "name": "About us",
        "path": "/aboutus"
    },
    {
        "name": "Contact us",
        "path": "/contactus"
    },
    {
        "name": "Add Product",
        "path": "/addProduct"
    }
]

const Navbar = () => {
    const { connectWallet, currentAccount, formData, setFormData} = useContext(ProductContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    // const {currentAccount} = props;
    

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <a href="/">
                    <img src={logo} alt="logo" className="w-32 cursor-pointer" />
                </a>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {navBarItemsList.map((item, index) => (
                    <NavbarItems key={item.name + index} title={item.name} link={item.path}/>
                ))}
                { currentAccount ? 
                    <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        {currentAccount}
                    </li>
                    :
                    <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" onClick={connectWallet}>
                        Login
                    </li>
                }
            </ul>
            <div className="flex relative">
                {toggleMenu 
                    ? <AiOutlineClose fontSize={28} className= "text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className= "text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none 
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                        ">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
                        </li>
                        {navBarItemsList.map((item, index) => (
                            <NavbarItems key={item.name + index} title={item.name} link={item.path} classprops="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;