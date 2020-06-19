import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Result } from './Result'
import axios from 'axios'

// const Styles = styled.div`
//   .table {
//     font-family: ff-tisa-web-pro, serif;
//     font-weight: 400;
//     font-style: normal;
//     color: #659DBD;
//   }
//
//   .error-sub {
//     font-family: ff-tisa-web-pro, serif;
//     font-weight: 400;
//     font-style: normal;
//     color: #659DBD;
//   }
// `;

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const Weather = (props) => {
  const zipCode = props.match.params.zipCode;
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${API_KEY}&units=imperial`;
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({
    city: "",
    temperature: null,
    feelsLike: null,
    high: null,
    low: null,
    imageCode: "",
    hasError: false,
    errorMessage: ""
  })

  useEffect(() => {
    setLoading(true)
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
        const message = error.response.data.error
        setWeatherData({
          ...weatherData,
          hasError: true,
          message: message
        })
        setLoading(false)
      })
  }, [zipCode, url, weatherData]);

  return (
    <>
      { loading ?
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> :
        <Result data={weatherData} />
      }
    </>
  )
}
