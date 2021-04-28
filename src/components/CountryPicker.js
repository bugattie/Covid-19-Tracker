import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

export const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries ] = useState([]);

    const fetchDailyData = async () => {
        const response = await fetch('https://covid19.mathdro.id/api/countries');
        let {countries} = await response.json();
        
        const countryName = countries.map(country => country.name );

        setFetchedCountries(countryName);
    };

    useEffect(() => {
        fetchDailyData();
    }, [setFetchedCountries]);

    return (
        <FormControl>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {
                    fetchedCountries.map((country, ind) => <option key={country} value={country}>{country}</option>)
                }
            </NativeSelect>
        </FormControl>
    )
}
