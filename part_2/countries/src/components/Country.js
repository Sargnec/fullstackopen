import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const Country = ({ country }) => {
    const [weather, setWeather] = useState([])

    useEffect(() => {
        console.log(api_key);
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
            .then(response => {
                setWeather(response.data.current);
            })
    }, [country])

    return (
        <div>
            <h3>{country.name}</h3>

            <p>capital: {country.capital}</p>
            <p>population: {country.population}</p>

            <h4>languages</h4>
            <ul>
                {country.languages.map(item => <li key={item.iso639_1}>{item.name}</li>)}
            </ul>

            <img src={country.flag} style={{ width: 100, height: 100 }} />
            {weather &&
                <div>
                    <h4>Weather in {country.capital}</h4>
                    <p>temperature: {weather?.temperature} Celsius</p>
                    <img src={weather?.weather_icons?.[0]} />
                    <p>wind: {weather.wind_speed} mph, direction {weather.wind_dir}</p>
                </div>
            }
        </div>
    )
}

export default Country