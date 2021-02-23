import React  from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const cities = [
  { name: 'Home'},
  { name: 'Articles'},
  { name: 'About'}
]
const Nav = () => {

  return(
    <nav>
      <ul className = 'nav'>
          {
            cities.map( city => <li key = {city.name}><Link to= {city.name.toLowerCase()==='home'? '/' :city.name.toLowerCase()}>{city.name}</Link></li>)
          }
      </ul>
    </nav>
  )
}
export default Nav;
