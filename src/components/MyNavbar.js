import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class MyNavbar extends Component {
	render() {
		return (

			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt="logo"
						src="/pokedex.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					Pokedex
				</Navbar.Brand>
			</Navbar>
		)
	}
}
