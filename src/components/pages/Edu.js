import React from 'react';
import '../../App.css';

export default function Edu() {
    return (
        <div>
            <div className='edu' id='edu'>
                <h1>
                    What is NFT? <br/> And how would it benefit the charity?
                </h1>
                <p>
                    Non-fungible tokens (NFTs) are cryptographic assets on a blockchain that can be distinguished from one another by their distinctive identifying codes and metadata.
                    They cannot be bought or exchanged for equivalent amounts like cryptocurrencies can. This contrasts with fungible tokens, like cryptocurrencies, which are interchangeable and can thus be used as a medium for business transactions.
                </p>
                <p2>
                    Charitable organizations can provide distinctive value to their donors through these NFTs long after they have made their first donation. This can be a ticket to an event, tangible goods, or even a say in how the fundraising initiative will ultimately turn out. Charities could also use paintings of the elderly as well as children to be made an NFT, enabling them to self-sustain in the long run.
                </p2>
            </div>
            <div className='btns-container-nft'>
                <a href="https://www.youtube.com/watch?v=h4LA_9bMjpE" target="_blank" rel="noopener noreferrer">
                    <button className='btns-nft' buttonStyle='btn--primary'     buttonSize='btn--large'>
                        LEARN HOW NFTS COULD HELP CHARITIES IN THE LONG RUN
                    </button>
                </a>
            </div>
            <div className='edu2' id='edu2'>
                <h1>
                    Creating and Connecting your Wallet
                </h1>
                <p>MetaMask is one of the leading crypto wallets, and relies on browser integration and good design to serve as one of the main gateways to the world of Web3, decentralized finance (DeFi) and NFTs. MetaMask is the wallet that donors will use to connect to and donate to their desired charities. Please have a look at the video below to have a full tour on how to install the MetaMask extension on your browser and create your wallet for donations.</p>
                <div className='video'>
                    <iframe width="650" height="400" src="https://www.youtube.com/embed/U0GoMFUnZrk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
            </div>
            <div className='edu3' id='edu3'>
                <h1>
                    What is Etherscan?
                </h1>
                <p>A block explorer for the Ethereum blockchain is called Etherscan. Users may quickly search for and view transactions and blocks thanks to it. Additionally, it offers details about each transaction and block, including the date and hash. Etherscan can be compared to Ethereum's equivalent of Google.</p>
                <div className='btns-container-ether'>
                    <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
                        <button className='btns-ether' buttonStyle='btn--primary'     buttonSize='btn--large'>
                           LINK TO ETHERSCAN WEBSITE
                        </button>
                    </a>
                </div>
            </div>
            
            
            

        </div>
        
    )
}

