import React, { Component } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';
import Search from './Search';

export default class PokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon?limit=20',
      pokemon: null,
      query: ''
    };
    // this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            <Search
              onTextChange={text => {
                this.setState({ query: text });
              }}
            />
            <div className="col-12">
              <div className="row">
                {this.state.pokemon
                  .filter(pokemon => pokemon.name.includes(this.state.query))
                  .map((pokemon, index) => (
                    <PokeCard
                      key={index}
                      name={pokemon.name}
                      url={pokemon.url}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <h4>Loading...</h4>
        )}
      </React.Fragment>
    );
  }
}
