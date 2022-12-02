import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() { //<video src={videos} autoPlay loop muted />
  return (
    <div className='hero-container'>
        <h1>DONATE WITH CONFIDENCE</h1>
        <p>Track and know where your donated funds go with the implementation of blockchain technology</p>
        <div className='hero-btns'>
              <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                LEARN MORE
              </Button>
        </div>
    </div>
  );
}

export default HeroSection;