import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = ({ articles }) =>{
  return(
    <ul className = 'articles'>
      {
        articles.map( article => (<li key = {article.name}>
          <Link to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0,250)}...</p>
          </Link></li>))
      }
    </ul>
  )
}

export default ArticleList;
