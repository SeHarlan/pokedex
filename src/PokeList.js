import React, { Component } from 'react';

import PokeItem from './PokeItem.js';

export default class App extends Component {
    

    render() {
        const pokeNodes = this.props.pokemon
            .map(item => <PokeItem item={item} key={item._id} />)
            
      return <section>
          <ul>
            {pokeNodes}
          </ul>
      </section>
    }
  }