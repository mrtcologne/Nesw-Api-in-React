import React from 'react';


const ArticleList = ({ article }) => (
    
	<article className="row">
        <div className="column">
		<img src={article.urlToImage} alt={''}></img>
		<h2>{article.title}</h2>

		<p className="description">{article.description}</p>
		<p><a href={article.url}>Link</a></p>
        </div>
	</article>
)

export default ArticleList;

