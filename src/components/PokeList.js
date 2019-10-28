import React, { Component } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

export default class PokeList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map((pokemon, index) => (				
              <PokeCard key={index} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        ) : (
          <h4>Loading...</h4>
        )}
      </React.Fragment>
    );
  }
}
