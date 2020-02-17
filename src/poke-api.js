import request from 'superagent';



const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';


export async function getPokemon() {

    const queryData = window.location.hash.slice(1);
    const queryString = (queryData) ? `pokemon=${queryData}` : '';

    const pageData = new URLSearchParams(window.location.search);
    const pageString = (pageData) ? `&${pageData}` : '';

    const newUrl = URL + '?' + queryString + pageString;

    const data = await request.get(newUrl);

    return data;
}