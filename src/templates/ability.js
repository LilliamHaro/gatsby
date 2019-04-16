    
import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const getName = ability =>
  ability.names.find(({ language }) => language.name === 'en').name;

export default ({ pageContext: { pokemon, ability } }) => (

  <Layout >
    <SEO title={pokemon.name} description={ability.effect_entries[0].effect} image={pokemon.sprites.front_default}/>
    
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>
      {pokemon.name}
      ’s {getName(ability)} ability
    </h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p>{ability.effect_entries[0].effect}</p>
    <Link to={`/pokemon/${pokemon.name}`}>Back to {pokemon.name}</Link>
    <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/page-2">Page 2</Link>
      </li>
  </div>
  </Layout>
);