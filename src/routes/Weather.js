import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { WeatherContainer } from '../components/WeatherContainer'
import axios from 'axios'
import history from '../history/history'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const Weather = (props) => {
  const zipCode = props.match.params.zipCode;
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=imperial`;
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: null,
    feelsLike: null,
    high: null,
    low: null,
    imageCode: ""
  })

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const data = response.data
        setWeatherData({
          ...weatherData,
          city: data.name,
          temperature: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min),
          imageCode: data.weather[0].icon
        })
        setLoading(false)
      })
      .catch(error => {
        history.push(`/${zipCode}/error`)
      })
  }, [zipCode, url, weatherData]);

  return (
    <>
      { loading ?
        <Spinner animation="border" role="status"></Spinner> :
        <WeatherContainer data={weatherData} />
      }
    </>
  )
}
