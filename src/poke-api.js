import request from 'superagent';



const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=';
const startURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=50';

export async function getPokemon() {
    let queryString = window.location.hash.slice(1);

    
    const newUrl = (queryString) ? URL + queryString : startURL;
    
    
    const data = await request.get(newUrl);

    return data;
}