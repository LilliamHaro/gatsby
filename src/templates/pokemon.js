import React from 'react';
import { Link } from 'gatsby';


import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { pokemon } }) => (
   <Layout >
    <SEO title={pokemon.name} description={"Description de "+ pokemon.name} image={pokemon.sprites.front_default} />
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>{pokemon.name}</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h2>Abilities</h2>
    <ul>
      {pokemon.abilities.map(ability => (
        <li key={ability.name}>
          <Link to={`./pokemon/${pokemon.name}/ability/${ability.name}`}>
            {ability.name}
          </Link>
        </li>
      ))}
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/page-2">Page 2</Link>
      </li>
    </ul>
    <Link to="/">Back to all Pokémon</Link>
  </div>
  </Layout>
);