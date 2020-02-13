import React, { Component } from 'react';
import PokeData from './mockData';
import request from 'superagent';

import PokeItem from './PokeItem.js';

export default class App extends Component {
    state = { pokeDex: [] }

    async componentDidMount() {
      const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
      this.setState({ pokeDex: data.body.results})
    }


    render() {
        const pokeNodes = this.state.pokeDex
            .map(item => <PokeItem item={item} key={item._id} />)
      return <section>
          <ul>
            {pokeNodes}

          </ul>
      </section>
    }
  }