import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
export default class PokeCard extends Component {
  state = {
    name: '',
    species: ''
  };

  render() {
    const name = this.props.name;
    const image = this.props.image;

    return (
      <div
        clasName="row"
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
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title> {name} </Card.Title>{' '}
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
