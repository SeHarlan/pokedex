import React, { Component } from 'react';
import PokeData from './mockData';

import PokeItem from './PokeItem.js';

export default class App extends Component {
    // state = { selected: null }
    render() {
        const pokeNodes = PokeData
            .map(item => <PokeItem item={item} key={item._id} />)
      return <section>
          <p>im a list</p>
          <ul>
            {pokeNodes}

          </ul>
      </section>
    }
  }