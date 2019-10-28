import React from 'react';
import ArticleList from './ArticleList';
const Article = ({ articles }) => (
	<section>
		{articles.map((article, index) => (
			<ArticleList article={article} key={index} />
		))}
	</section>
);

export default Article;