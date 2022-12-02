import React from 'react';
import { HashLink } from 'react-router-hash-link';

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <HashLink className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img 
                    src={props.src} 
                    alt="Charity" //a name only, prefreable not using SOME words
                    className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        {props.text}
                    </h5>
                </div>
            </HashLink>
        </li>
    </>
  )
}

export default CardItem