import React, { Component } from 'react';
import axios from 'axios';
import PokeCard from './PokeCard';

export default class PokeList extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			url: 'https://pokeapi.co/api/v2/pokemon?limit=152',
			pokemon: null,
			query:''
		};
		this.handleOnInputChange = this.handleOnInputChange.bind(this);
	}

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
	}
	
	handleOnInputChange = (event) => {
		const query = event.target.value;
							this.setState({ query } );
	};

  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            <label className="search-label" htmlFor="search-input">
              <input
                type="text"
                value={this.state.query}
                id="search-input"
                placeholder="Search..."
                onChange={this.handleOnInputChange}
              />
              <i className="fa fa-search search-icon" />
            </label>
            <div className="col-12">
              <div className="row">
                {this.state.pokemon.map((pokemon, index) => (								
                  <PokeCard key={index} name={pokemon.name} url={pokemon.url} />
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
