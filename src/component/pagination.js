import React from 'react';
import './style.css';

const Pagination = ({countriesCounter, totalCountries, paginate}) => {
    const pageNumber = [];

    for(let i = 1; i < Math.ceil(totalCountries / countriesCounter); i++ ) {
        pageNumber.push(i)
    }
    return (
        <ul className='paginate'>
            {
                pageNumber.map(number => (
                    <li key={number}>
                        <button href='#' onClick={() => paginate(number)} className='paginate__button'>{number}</button>
                    </li>
                ))
            }
        </ul>
    )
}
export default Pagination;