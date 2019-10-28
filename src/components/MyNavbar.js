import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class MyNavbar extends Component {
	render() {
		return (

			<Navbar variant="dark">
				<Navbar.Brand href="#">
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
