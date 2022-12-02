import React from 'react';
import '../../App.css';


export default function AboutUs() {
    return (
        <div className='about-us'>
            <h1>
                ABOUT US
            </h1>
            <p>
                Charitise serves to provide the confidence in donors when making a donation to their desired charitable organization.
                With the help of blockchain technology, you can now trace the transaction you made to the charity.
                More importantly, blockchain technology provides the security needed especially for the donors when donating as it is immutable.
                Which means that the records charities have made could not be changed and will on the blockchain forever.
                Allowing donors to view it anytime.
            </p>
            <div className='btns-container'>
                <a href='https://www.youtube.com/watch?v=6WG7D47tGb0&ab_channel=WorldEconomicForum' target="_blank" rel="noopener noreferrer">
                    <button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        LEARN MORE ON BLOCKCHAIN TECHNOLOGY
                    </button>
                </a>
            </div>
        </div>
    )
}

/*
<p>
Charitise serves to provide the confidence in donors when making a donation to their desired charitable organization.
</p>
<p2>
With the help of blockchain technology, you can now trace the transaction you made to the charity.
</p2>
<p3>
More importantly, blockchain technology provides the security needed especially for the donors when donating as it is immutable.
</p3>
<p4>
Which means that the records charities have made could not be changed and will on the blockchain forever.
</p4>
<p5>
Allowing donors to view it anytime.
</p5>
*/