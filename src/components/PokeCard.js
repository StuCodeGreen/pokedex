import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
export default class PokeCard extends Component {
  state = {
    name: '',
    url: '',
    image: ''
  };

  async componentDidMount() {
    const { name, url } = this.props;
    const res = await axios.get(url);
    this.setState({
      name,
      image: res.data['sprites'].front_default
    });
  }

  render() {
    console.log(this.state.sprites);
    return (
      <div
        clasName="col-3"
        style={{
          background: 'pink'
        }}
      >
        <Card
          className="my-5"
          style={{
            width: '18rem'
          }}
        >
          <Card.Img variant="top" src={this.state.image} />
          <Card.Body>
            <Card.Title style={{ textTransform: 'capitalize' }}>
              {' '}
              {this.state.name}{' '}
            </Card.Title>{' '}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card 's content.{' '}
            </Card.Text>{' '}
            <Button variant="primary"> Go somewhere </Button>{' '}
          </Card.Body>{' '}
        </Card>{' '}
      </div>
    );
  }
}
