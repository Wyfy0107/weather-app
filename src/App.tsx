import React, { Component } from 'react'
import InfoDisplayAQI from './Components/AQI/InfoDisplayAQI'
import './CSS/App.css'
import WeatherCard from './Components/Weather/WeatherCard'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <InfoDisplayAQI />
        <WeatherCard />
      </div>
    )
  }
}
