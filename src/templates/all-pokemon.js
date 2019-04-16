    
import React from 'react';
import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { allPokemon } }) => (

  <Layout >
    <SEO title="Pokemon Lista" description="Description List Pokemon" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a Pokémon!</h1>
    <ul style={{ padding: 0 }}>
      {allPokemon.map(pokemon => (
        <li
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          <Link to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
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
  </div>
  </Layout>
);