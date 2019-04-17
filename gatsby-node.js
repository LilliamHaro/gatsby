// const axios = require('axios');
// const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       //axiops.get obtener el poke por el nombre
//       const { data: pokemon } = await get(`/pokemon/${name}`);

//       //axiops.get obtener la data de las habilidades del pokemon 
//       const abilities = await Promise.all(
//         pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
//           const { data: ability } = await get(`/ability/${abilityName}`);

//           return ability;
//         })
//       );
//         // ... operador de propagación -- pasar objetos como paramentros? o concatenar arrays
//       return { ...pokemon, abilities };
//     })
//   );

// exports.createPages = async ({ actions: { createPage } }) => {
//   const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle', 'kabuto','ditto']);

//   // Create a page that lists all Pokémon.
//   createPage({
//     path: `/pokemon/`,
//     component: require.resolve('./src/templates/all-pokemon.js'),
//     context: { allPokemon }
//   });

//   // Create a page for each Pokémon.
//   allPokemon.forEach(pokemon => {
//     createPage({
//       path: `/pokemon/${pokemon.name}/`,
//       component: require.resolve('./src/templates/pokemon.js'),
//       context: { pokemon }
//     });

//     // Create a page for each ability of the current Pokémon.
//     pokemon.abilities.forEach(ability => {
//       createPage({
//         path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
//         component: require.resolve('./src/templates/ability.js'),
//         context: { pokemon, ability }
//       });
//     });
//   });
// };

const axios = require('axios')
exports.createPages = async ({ actions: { createPage } }) => {
    try {
        const response = await axios.get('https://circuit.com.pe/api/oazi/products');
        const categoriaZonaHol = await axios.get('https://circuit.com.pe/api/oazi/category/zona-holistica');
        const allMessagesComponent=require.resolve('./src/templates/all-pokemon.js')
        const MessageComponent=require.resolve('./src/templates/pokemon.js')
        const productosHole=require.resolve('./src/templates/pro-hol.js')

        createPage({
            path:'/pokemon',
            component:allMessagesComponent,
            context:{
                allMessages:response.data.products
            }
        })
        response.data.products.forEach(element => {
            createPage({
                path:`/pokemon/${element.id}`,
                component:MessageComponent,
                context:{
                    messageContent:element
                }
            })
        });


      createPage({
        path:'/pokemon/zona-holistica',
        component:productosHole,
        context:{
            productosHol:categoriaZonaHol.data.products
        }
    })

        return Promise.resolve()
    } catch (error) {
        return Promise.reject(new Error(error))
    }
};

