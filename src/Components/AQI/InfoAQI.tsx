import React from 'react'
import styled from 'styled-components'

import { WeatherInfo } from './InfoDisplayAQI'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 1;
  align-items: center;
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

const BackgroundWeather = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
`

const Wrapper2 = styled(Wrapper1)`
  background: #49739a;
  margin: 20px;
`

type InfoAQIProps = {
  data: null | WeatherInfo
}

function InfoAQI({ data }: InfoAQIProps) {
  return (
    <Wrapper>
      <BackgroundWeather>
        <h1 style={{ color: 'white' }}>Helsinki Air Quality Index</h1>
        <Wrapper1>
          <div style={{ flex: '2 1', marginBottom: '15px' }}>
            {/* non-null assertion */}
            {/* <h1>{data!.aqi}</h1> */}
            {/* optional chaining */}
            <h1>{data?.aqi}</h1>
            {/* {data && data.aqi} */}
            <strong>
              <p style={{ fontSize: '1rem' }}>AQI</p>
            </strong>
          </div>
          <div
            style={{
              flex: '1 1',
              marginTop: '3rem',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
          >
            {data && data.pm10.toFixed(2)}
            <strong>
              <p>PM 10 (µg/m³)</p>
            </strong>
          </div>
          <div
            style={{
              flex: '1 1',
              marginTop: '3rem',
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'center',
            }}
          >
            {data && data.pm25.toFixed(2)}
            <strong>
              <p>PM 2.5 (µg/m³)</p>
            </strong>
          </div>
        </Wrapper1>
      </BackgroundWeather>

      <Wrapper2>
        <p>
          NO<span style={{ fontSize: '1rem' }}>2</span>
          <br />
          {data && data.no2.toFixed(2)}
        </p>
        <p>
          CO
          <br />
          {data && data.co.toFixed(2)}
        </p>
        <p>
          O<span style={{ fontSize: '1rem' }}>3</span>
          <br />
          {data && data.o3.toFixed(2)}
        </p>
        <p>
          SO<span style={{ fontSize: '1rem' }}>2</span>
          <br />
          {data && data.so2.toFixed(2)}
        </p>
      </Wrapper2>
    </Wrapper>
  )
}

export default InfoAQI
