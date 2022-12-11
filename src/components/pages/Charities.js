import React from 'react';
import '../../App.css';
import CharityData from '../CharityData';

export default function Charities() {
    console.log(CharityData);
    const listCharity = CharityData.map((charity) => 
        <div className='card' key={charity.id}>
            <div className='card_img'>
                <img alt="charity_image" src={charity.thumb} />
            </div>
            <div className='card_header'>
                <h2>{charity.accountName}</h2>
                <h3>{charity.accountAddress}</h3>
                <p className='description'>{charity.description}</p>
                <button className='btnC' onClick={() => {navigator.clipboard.writeText(charity.accountAddress);}}>
                    <p>Click To Copy Wallet Address</p>
                </button>
            </div>
        </div>
    );

    return(
        <div className='charities'>
            <div className='main_charity'>
                <h3>LIST OF AVAILABLE CHARITIES FOR YOU TO DONATE</h3>
                {listCharity}
            </div>
            <div className='footer-container'>
                <p>Want to register as a charity? Email us at charitise@gmail.com</p>
            </div>
        </div>
    )
}