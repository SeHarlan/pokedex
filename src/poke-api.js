import request from 'superagent';
import { stateStart } from './App.js'


// const URL = 'https://alchemy-pokedex.herokuapp.com';
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?page=3&perPage=50';

export async function getPokemon() {
    let queryString = (window.location.hash.slice(1)) ? `pokemon?${window.location.hash.slice(1)}` : '';
    const newUrl = URL + queryString;

    const response = await request.get(newUrl);
    const freshData = {
        results: [response.body.results],
        page: response.body.page,
        perPage: response.body.perPage,
    }

    let data;
    (response) ? data = freshData : data = stateStart;
    
    return data;
}