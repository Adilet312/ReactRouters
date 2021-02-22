import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Article from '../Article/Article';
import Articles from '../Articles/Articles';

const MainPage = () => {
  return(
      <Router>
        <Fragment>
            <Nav/>
            <Route path = '/article'  component = { Article } />
            <Route path = '/articles'  component = { Articles } />
            <Route path = '/about'  component = { About } />
        </Fragment>
      </Router>
  )
}
export default MainPage;
