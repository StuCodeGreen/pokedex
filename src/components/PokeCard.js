import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
export default class PokeCard extends Component {
  state = {
    name: '',
    url: '',
		image: '',
		species:'',
		weight: '',
		height:'',
		abilities: '',
  };

  async componentDidMount() {
    const { name, url } = this.props;
		const res = await axios.get(url);
		
		const abilities = res.data.abilities
		.map(ability => {
			return ability.ability.name
				.split('-')
				.join(' ');
		})
		.join(', ');

    this.setState({
      name,
			image: res.data['sprites'].front_default,
			species: res.data['species'].name,
			weight: res.data['weight']/100,
			height: res.data['height']*10,
			abilities
    });
  }

  render() {

    // console.log(this.state.abilities);
    return (
			
      <div className="col-3">
        <Card
          className="my-5"
          style={{
						width: '16rem',
						height: '16rem'
          }}
        >
          <Card.Img variant="top" src={this.state.image} style={{ width: '8rem' }} />
          <Card.Body style={{ textTransform: 'capitalize',paddingTop:0 }}>
            <Card.Title >
              {this.state.name}
            </Card.Title>
            <Card.Text>
							Species: {this.state.species}<br/>
							Height: {this.state.height} Cm<br/>
							Weight: {this.state.weight} kg<br/>
							Abilities: {this.state.abilities}      
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
