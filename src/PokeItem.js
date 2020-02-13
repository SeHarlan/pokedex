import React, { Component } from 'react';

export default class App extends Component {
    render() {
      return <li>
          <h1>{this.props.item.pokemon}</h1>
          <span>Type: {this.props.item.type_1}</span>
          <span>HP: {this.props.item.hp}</span>
          <img src={this.props.item.url_image} alt={this.props.item.pokemon} />
          <p>Attack Stat: {this.props.item.attack}</p>
          <p>Defense Stat: {this.props.item.defense}</p>
      </li>
    }
  }