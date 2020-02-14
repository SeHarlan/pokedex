import React, { Component } from 'react';
import './App.css';

import { getPokemon } from './poke-api.js';


import Header from './Header.js';
import PokeList from './PokeList.js';
import Search from './Search';

export const stateStart = {
  pokemon: [],
  totalResults: []
}

export default class App extends Component {

  state = stateStart

  async loadPokemon() {
      const pokemonData = await getPokemon();
      console.log(pokemonData)
  }

  async componentDidMount() {
    await this.loadPokemon();

    window.addEventListener('hashchange', async () => {
      await this.loadPokemon;
    })
  }

  render() {
    return <div>
      <Search />
      <Header />
      <PokeList />
    </div>
  }
}
