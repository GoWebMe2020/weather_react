import React, { useEffect, useState } from 'react'
import WeatherDisplay from './WeatherDisplay';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { countries, countryCities } from '../data/locationData';
import axios from 'axios';
import './CurrentWeatherLocation.css';
import 'react-toastify/dist/ReactToastify.css';

function CurrentWeatherLocation() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const savedCity = localStorage.getItem('city');
    const savedCountry = localStorage.getItem('country');

    if (savedCity && savedCountry) {
      setCity(savedCity);
      setCountry(savedCountry);
    } else {
      const getLocation = async () => {
        try {
          const locationResponse = await axios.get('http://ip-api.com/json/');
          setCity(locationResponse.data.city);
          setCountry(locationResponse.data.countryCode);
          toast.success(`You are viewing the weather for ${city}.`);
        } catch (error) {
          console.error('Error fetching the location:', error);
        }
      };

      getLocation();
    }
  }, []);

  useEffect(() => {
    setCities(countryCities[country] || []);
  }, [country]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.city.value;
    const newCountry = e.target.country.value;
    setCity(newCity);
    setCountry(newCountry);
    localStorage.setItem('city', newCity);
    localStorage.setItem('country', newCountry);
  }

  return (
    <div>
      <ToastContainer />
      <form className='weather-selection' onSubmit={handleSubmit}>
        <label htmlFor="country">Country</label>
        <select id='country' name='country' value={country} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map(country => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))}
        </select>
        <label htmlFor="city">City</label>
        <select id='city' name='city' value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select a city</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </form>
      {city && country ? (<WeatherDisplay city={city} country={country} />) : (<p><FontAwesomeIcon className='spinner' icon={faSpinner} spin /></p>)}
    </div>
  )
}

export default CurrentWeatherLocation;
