import React from 'react';
import Article from './Article/Article'

import './App.css';

const Title = () => (
	<h1>News App</h1>
);

class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			articles: [],
		};
	}
	
	componentDidMount() {		
		fetch('https://newsapi.org/v2/top-headlines?country=de&apiKey=64402ffac34649eeb5a228aba040cc3d')
			.then(response => response.json())
			.then((response) => {
				this.setState({ articles: response.articles });
			});		
	}
	
	render() {
		return (
			<div>
				<Title />
				<Article articles={this.state.articles} />
			</div>
		);
	}
}


export default App;
