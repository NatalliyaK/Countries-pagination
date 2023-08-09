import React from 'react';
import './style.css';

const Country = ({contr} ) => {
    return (
        <li className='country'>
            <p>{contr.name.common}</p>
            <img src={contr.flags.png} alt='flag' className='image' />
        </li>
    );
};

export default Country;