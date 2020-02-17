import React from "react";
import renderer from "react-test-renderer";
import PokeItem from './PokeItem.js';

test('renders PokeItem.js correctly', () => {
  const tree = renderer
    .create(<PokeItem item={{}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})