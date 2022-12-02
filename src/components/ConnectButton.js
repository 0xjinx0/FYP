import React from 'react'
import './Button.css'
import { useEffect, useState } from 'react';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const [walletAddress, setWalletAddress] = useState("");

    useEffect (() => {
        getCurrentWalletConnected();
        addWalletListener();
    });

    const connectWallet = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /*MetaMask is installed*/
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts", });
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            } catch(err) {
                console.error(err.message);
            }
        } else {
            /*MetaMask is not installed*/
            console.log("Please install MetaMask on your browser");
        }
    };

    const getCurrentWalletConnected = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                const accounts = await window.ethereum.request({ method: "eth_accounts", });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    console.log(accounts[0]);
                } else {
                    console.log("Connect to MetaMask using the Connect Button")
                }
            } catch(err) {
                console.error(err.message);
            }
        } else {
            /*MetaMask is not installed*/
            console.log("Please install MetaMask on your browser");
        }
    };

    const addWalletListener = async() => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            window.ethereum.on("accountsChanged", (accounts) => {
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            });
        } else {
            /*MetaMask is not installed*/
            setWalletAddress("");
            console.log("Please install MetaMask on your browser");
        }
    };

    return (
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {connectWallet} type = {type}>
            {walletAddress && walletAddress.length > 0 ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
        </button>
    )
};