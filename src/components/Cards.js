import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Explore the Application</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src="images/nft.jpg"
                        text="Learn how NFTs could aid charities around the world"
                        label="What is NFT?" //will show up as a small label on the image, can change, wont affect
                        path="/edu#edu" //path to the other pages, ensure to rename the same name as the pages set
                    />
                    <CardItem 
                        src="images/connect-wallet1.jpg"
                        text="Not sure how to create and connect your wallet? Click here to find out more"
                        label="Creating and Connecting your Wallet"
                        path="/edu#edu2"
                    />
                    <CardItem 
                        src="images/thirdcard.png"
                        text="Start donating to charities that are requiring aid"
                        label="Donate now!"
                        path="/charities"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards