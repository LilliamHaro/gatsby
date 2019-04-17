// import React from 'react';
// import { Link } from 'gatsby';


// import Layout from "../components/layout"
// import SEO from "../components/seo"

// export default ({ pageContext: { pokemon } }) => (
//    <Layout >
//     <SEO title={pokemon.name} description={"Description de "+ pokemon.name} image={pokemon.sprites.front_default} />
//   <div style={{ width: 960, margin: '4rem auto' }}>
//     <h1>{pokemon.name}</h1>
//     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//     <h2>Abilities</h2>
//     <ul>
//       {pokemon.abilities.map(ability => (
//         <li key={ability.name}>
//           <Link to={`./pokemon/${pokemon.name}/ability/${ability.name}`}>
//             {ability.name}
//           </Link>
//         </li>
//       ))}
//       <li>
//         <Link to="/">Inicio</Link>
//       </li>
//       <li>
//         <Link to="/page-2">Page 2</Link>
//       </li>
//     </ul>
//     <Link to="/">Back to all Pokémon</Link>
//   </div>
//   </Layout>
// );

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'


const Message = props => {
  const {pageContext} = props
  const {messageContent} = pageContext
  return (
    <Layout>
      <SEO title={`Message=`} keywords={[`gatsby`, `application`, `react`]} />
      <h1>Message Contents</h1>
      <h4>This is your message contents:{pageContext.messageContent.name}</h4>
      <h4>This is your message contents:{pageContext.messageContent.description}</h4>
      <img src={pageContext.messageContent.image} alt=""/>
      <Link to="/pokemon">Go back</Link>
    </Layout>
  )
}
export default Message