import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ConnectButton';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false); //create click
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); //handle click
  const closeMobileMenu = () => setClick(false); //handle menu 

  const showButton = () => { //short mode button state
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //to prevent "Connect Wallet" appearing after refresh when short mode
  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    //Logo import from Font Awesome(11), Menu Icon(15), Menus(22), button components(44, after ul)
    //<i className='fab fa-typo3' />
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}> 
                  CHARITISE  
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                      About Us
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/edu' className='nav-links' onClick={closeMobileMenu}>
                      Education
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/charities' className='nav-links' onClick={closeMobileMenu}>
                      Charities
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' />}
            </div> 
        </nav>
    </>
  )
}

export default Navbar;