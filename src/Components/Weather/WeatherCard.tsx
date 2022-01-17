import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'

const WeatherDisplay = styled.div`
  min-height: 45vh;
  min-width: 25vw;
  background: white;
  opacity: 0.8;
  margin: 20px;
  border-radius: 8px;
  opacity: 0.8;
  text-align: center;
  display: flex;
  flex-flow: column;
`

type Weather = {
  code: number
  description: string
  icon: string
}

// interface ICityResponse {}

type CityResponse = {
  app_temp: number
  rh: number
  temp: number
  wind_spd: number
  pod: string
  weather: Weather
}

type ApiResponse = {
  count: number
  data: CityResponse[]
}

export type WeatherCardState = {
  appTemp: null | number
  humidity: null | number
  temp: null | number
  windSpeed: null | number
  partOfDay: null | string
  weather: null | Weather
}

class WeatherCard extends Component {
  state: WeatherCardState = {
    appTemp: null,
    humidity: null,
    temp: null,
    windSpeed: null,
    partOfDay: null,
    weather: null,
  }
  componentDidMount() {
    axios
      .get<ApiResponse>(
        'https://api.weatherbit.io/v2.0/current?city=Helsinki&key=12b3830093e741069ba73debc71898a8'
      )
      .then(res => {
        this.setState({
          appTemp: res.data.data[0].app_temp,
          humidity: res.data.data[0].rh,
          temp: res.data.data[0].temp,
          windSpeed: res.data.data[0].wind_spd,
          partOfDay: res.data.data[0].pod,
          weather: res.data.data[0].weather,
        })
      })
  }

  render() {
    return (
      <div>
        <WeatherDisplay>
          <WeatherInfo
            appTemp={this.state.appTemp}
            humidity={this.state.humidity}
            temp={this.state.temp}
            windSpeed={this.state.windSpeed}
            partOfDay={this.state.partOfDay}
            weather={this.state.weather}
          />
        </WeatherDisplay>
      </div>
    )
  }
}

export default WeatherCard
