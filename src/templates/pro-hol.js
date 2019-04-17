    
// import React from 'react';
// import { Link } from 'gatsby';
// import axios from 'axios'

// import Layout from "../components/layout"
// import SEO from "../components/seo"


// let getUsers = async () => {
//   let res = await axios.get("https://circuit.com.pe/api/oazi/products").then( response => {
//     console.log(response.data.products)
//     return response.data.products
//   });
// };

// getUsers()


// export default ({ pageContext: { allPokemon } }) => (

//   <Layout >
//     {console.log(allPokemon)}
//     <SEO title="Pokemon Lista" description="Description List Pokemon" image="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>
//   <div style={{ width: 960, margin: '4rem auto' }}>
//     <h1>Choose a Pokémon!</h1>
//     <ul style={{ padding: 0 }}>
//       {allPokemon.map(pokemon => (
//         <li
//           key={pokemon.id}
//           style={{
//             textAlign: 'center',
//             listStyle: 'none',
//             display: 'inline-block'
//           }}
//         >
//           <Link to={`/pokemon/${pokemon.name}`}>
//             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//             <p>{pokemon.name}</p>
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
//   </div>
//   </Layout>
// );


import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'

const DashboardPage = props => {
  const {pageContext} = props
  const {productosHol} = pageContext
  return (
    <Layout>
      <SEO title="Dashboard" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Dashboard</h1>
      <p>Welcome to your new Gatsby site.</p>

    <ul>
     {
      pageContext.productosHol.map( (prod,i) => (
        <li key={i}>{prod.name}

          <br/>
    
        </li>
        
      ))
     }

    </ul>
    </Layout>
  )
}
export default DashboardPage