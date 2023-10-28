import React from 'react';
import Article from './Article';

function ArticleList(props) {
  const articleComponents = props.articles.map((article, index) => (
    <Article
      key={index}
      title={article.title}
      date={article.date || 'January 1, 1970'}
      preview={article.preview}
    />
  ));

  return <main>{articleComponents}</main>;
}

export default ArticleList;