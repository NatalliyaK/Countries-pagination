import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  Country  from './country';
import './style.css';
import Pagination from './pagination';

function Countries() {
    const[countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [countriesCounter] = useState(10);

    const lastCountryIndex = page * countriesCounter;
    const firstCountryIndex = lastCountryIndex - countriesCounter;
    const currentCountry = countries.slice(firstCountryIndex,lastCountryIndex);

    useEffect(() => {
        const getCountries = async () => {
            setLoading(true)
            const res = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(res.data);
            setLoading(false)
        }

        getCountries()
    },[])

    const paginate = (pageNumber) => {
        setPage(pageNumber)
    }

    if(loading) {
        return  <h2>загрузка</h2>
    } else {
        return (
            <div className="container">
                <h1>countries</h1>
                <ul>{currentCountry.map((elem,index) => (
                    <Country contr={elem} key={index} />
                ))}
                </ul>
                <Pagination
                    countriesCounter={countriesCounter}
                    totalCountries={countries.length}
                    paginate={paginate}
                />
            </div>
        );
    }


}

export default Countries;
