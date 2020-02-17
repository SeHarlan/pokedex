import React from "react";
import renderer from "react-test-renderer";
import PokeList from './PokeList.js';
import mockData from '../src/mockData.js'

test('renders pokelist.js correctly', () => {
  const tree = renderer
    .create(<PokeList pokemon={mockData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})