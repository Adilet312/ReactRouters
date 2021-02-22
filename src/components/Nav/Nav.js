import React  from 'react';
import './Nav.css';
const cities = [
  { name: 'Seattle'},
  { name: 'NewYork'},
  { name: 'Tokyo'},
  { name: 'Moscow'},
  { name: 'Bishkek'}
]
const Nav = () => {

  return(
    <nav>
      <ul>
          {
            cities.map( city => <li><a href='#'>{city.name}</a></li>)
          }
      </ul>
    </nav>
  )
}
export default Nav;
