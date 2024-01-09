import React from 'react'
import useWeatherData from '../utils/useWeatherData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { roundOffNum, allCaps } from '../utils/utils';
import './WeatherDisplay.css';

function Weather({ city, country }) {
  const { weather, loading, error } = useWeatherData(city, country);

  if (loading) return <p><FontAwesomeIcon className='spinner' icon={faSpinner} spin /></p>;
  if (error) return <p>Error fetching weather data.</p>;

  const windDirectionStyle = {
    transform: `rotate(${weather.wind?.deg}deg)`,
    transition: 'transform 0.3s ease-out',
    filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.8))'
  };

  const windIconStyle = {
    filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.8))'
  };

  return (
    <div className='weather'>
      <h2 className='location-title'>My Location</h2>
      <h3 className='smaller-all-caps'>{allCaps(weather.name)}</h3>
      <p className='current-temp'>{roundOffNum(weather.main?.temp)}°</p>
      <p className='smaller-all-caps'>{allCaps(weather.weather?.[0].description)}</p>
      <div className="temperature">
        <div className="temperature-left">
          <p className='smaller-all-caps'>L: {roundOffNum(weather.main?.temp_min)}°</p>
        </div>
        <div className="temperature-right">
          <p className='smaller-all-caps'>H: {roundOffNum(weather.main?.temp_max)}°</p>
        </div>
      </div>
      <p className='smaller-all-caps'>Feels Like: {roundOffNum(weather.main?.feels_like)}°</p>
      <div className="wind-data">
      <FontAwesomeIcon className='wind-icon' icon={faWind} style={windIconStyle} />
        <div className="wind-left">
          <div className="wind">
            <h3>{roundOffNum(weather.wind?.speed)}</h3>
            <div className="wind-specs">
              <p className='smaller-all-caps'>KM/H</p>
              <p className='smaller-all-caps'>WIND</p>
            </div>
          </div>
          <hr />
          <div className="wind">
            <h3>{roundOffNum(weather.wind?.gust)}</h3>
            <div className="wind-specs">
              <p className='smaller-all-caps'>KM/H</p>
              <p className='smaller-all-caps'>GUST</p>
            </div>
          </div>
        </div>
        <div className="wind-right">
          <div className="compass">
            <FontAwesomeIcon className='direction' icon={faLocationArrow} style={windDirectionStyle} />
            <div className="compass-points">
              <p>N</p>
              <p>E</p>
              <p>S</p>
              <p>W</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;
