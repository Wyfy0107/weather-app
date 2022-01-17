import React from 'react'
import styled from 'styled-components'
import { WeatherCardState } from './WeatherCard'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1;
  align-items: center;
`

const BackgroundWeather = styled.div`
  background: black;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
`

const Wrapper1 = styled.div`
  display: flex;
  flex-flow: row;
  background: #b0e867;
  width: 95%;
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
`

const Wrapper2 = styled(Wrapper1)`
  background: #49739a;
  margin: 20px;
`

type WeatherInfoProps = WeatherCardState

function WeatherInfo({
  appTemp,
  humidity,
  temp,
  windSpeed,
  partOfDay,
  weather,
}: WeatherInfoProps) {
  return (
    <Wrapper>
      <BackgroundWeather>
        <h1 style={{ color: 'white' }}>Helsinki Weather</h1>
        <Wrapper1>
          <div style={{ flex: '2 1', marginBottom: '15px' }}>
            <h1>{temp}</h1>
            <strong>
              <p style={{ fontSize: '1rem' }}>Celcius</p>
            </strong>
          </div>

          <div
            style={{
              flex: '1 1',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
          >
            <strong>
              <p>Feels like</p>
            </strong>
            {appTemp}
          </div>

          <div
            style={{
              flex: '1 1',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
          >
            <strong>
              <p>Wind</p>
            </strong>
            {windSpeed} km/h
          </div>
        </Wrapper1>
      </BackgroundWeather>

      <Wrapper2>
        <p>
          Humidity
          <br />
          {humidity} %
        </p>
        <p>
          Weather
          <br />
          <strong>{weather && weather.description}</strong>
        </p>
      </Wrapper2>
    </Wrapper>
  )
}

export default WeatherInfo
