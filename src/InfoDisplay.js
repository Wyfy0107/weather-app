import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Info from './Info';

const Display = styled.div`
	min-height: 45vh;
	min-width: 25vw;
	background: white;
	opacity: 0.8;
	margin: 20px;
	box-shadow: 0 8px black;
	border-radius: 8px;
	padding: 8px;
	opacity: 0.8;
	text-align: center;
	display: flex;
	flex-flow: column;
`;

class InfoDisplay extends Component {
	state = {
		aqi: null,
	};
	componentDidMount() {
		axios
			.get(
				'https://api.weatherbit.io/v2.0/current/airquality?city=Helsinki&key=12b3830093e741069ba73debc71898a8'
			)
			.then((res) => this.setState({ aqi: res.data.data[0] }));
	}

	render() {
		return (
			<div>
				<Display>
					<Info data={this.state.aqi} />
				</Display>
			</div>
		);
	}
}

export default InfoDisplay;
