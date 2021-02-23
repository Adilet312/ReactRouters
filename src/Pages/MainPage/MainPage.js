import React, { Fragment }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Article from '../Article/Article';
import Articles from '../Articles/Articles';
import Home from '../Home/Home';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const MainPage = () => {
  return(
      <Router>
        <Fragment>
            <Nav/>
          <Switch>
            <Route path = '/' exact component ={Home}/>
            <Route path = '/article/:name'  component = { Article } />
            <Route path = '/articles'  component = { Articles } />
            <Route path = '/about'  component = { About } />
            <Route component = { NotFoundPage}/>
          </Switch>
        </Fragment>
      </Router>
  )
}
export default MainPage;
