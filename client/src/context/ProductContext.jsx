import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';
import { contractTransactionABI, contractProductABI, contractAddress } from "../utills/const";

export const ProductContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const productContract = new ethers.Contract(contractAddress, contractProductABI, signer);

    return productContract;
}

export const ProductProvider = ({ children }) => {
    const [ formData, setFormData ] = useState({ code : "", productName : "", productDescription : "", amount : 0, keyword :  "", receiver: "", sender : "" });
    const [ currentAccount, setCurrentAccount ] = useState();    
    const [ isLoading, setIsLoading ] = useState(false);

    const handleChange = (e, name) => {
        setFormData((prevState)=>({ ...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts'});
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
                // getAllTransactions();
            } else {
                console.log("No account found.");
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
            console.log("accounts", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const { code, productName, productDescription, amount, keyword, receiver } = formData;

            const productContract = getEthereumContract();
            const passedEther = ethers.utils.parseEther(amount);

            const decimals = 18;
            const productPrice = ethers.utils.parseUnits(amount, decimals);

            // Transfer money from the buyers account to the company acoount.
            // Link metamask account or browser connected wallet to do the transaction.

            // await ethereum.request({
            //     method: 'eth_sendTransaction',
            //     params : [{
            //         from : currentAccount,
            //         to : contractAddress,
            //         gas: '0x52080',
            //         value: passedEther._hex
            //     }]
            // })

            setIsLoading(true);
            
            const productHash = await productContract.addToBlockchain( code, productName, productName, productPrice, code );

            // await productHash.wait();

            //Save product information to private network. call the private API and save it on the mySQL DB.
            //Get the transaction hash from the smart contract call back function and save it in the DB as a key reference to the blockchain.

            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <ProductContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, isLoading, setIsLoading, sendTransaction }}>
            {children}
        </ProductContext.Provider>
    )

}