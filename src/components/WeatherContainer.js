import React from 'react'
import { PageHeader } from './PageHeader'
import { WeatherImage } from './WeatherImage'
import { WeatherTable } from './WeatherTable'

export const WeatherContainer = (props) => {
  return (
    <>
      <PageHeader header={props.data.city} />
      <WeatherImage imageCode={props.data.imageCode} />
      <WeatherTable
        temp={props.data.temperature}
        feels={props.data.feelsLike}
        high={props.data.high}
        low={props.data.low} />
    </>
  )
}
