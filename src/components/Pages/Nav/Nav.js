import React  from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const cities = [
  { name: 'Home'},
  { name: 'Article'},
  { name: 'Articles'},
  { name: 'About'}
]
const Nav = () => {

  return(
    <nav>
      <ul>
          {
            cities.map( city => <li><Link to= {city.name.toLowerCase()==='home' ? '/' : city.name.toLowerCase()}>{city.name}</Link></li>)
          }
      </ul>
    </nav>
  )
}
export default Nav;
