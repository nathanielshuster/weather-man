import React from 'react'
import { PageHeader } from '../components/PageHeader'

export const NoWeather = (props) => {
  const zipCode = props.match.params.zipCode;
  const sub = "No results for " + zipCode
  return (
    <PageHeader header="Sorry!" sub={sub} />
  )
}
