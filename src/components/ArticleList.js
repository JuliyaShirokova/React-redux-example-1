import React, {Component} from 'react';
import Article from '../components/Article';
import PropTypes from 'prop-types';
import toogleAccordeon from '../decorators/toogleAccordeon';
import {articles} from '../fixtures'

class ArticleList extends Component{

	constructor(props){
		super(props)

		this.state={
			visibleArticles : {articles}
		}

	}

	getArticleList = ()=>{
		return articles.map(
			(article) => <li key={article.id}>
				<Article 
					article = {article} 
					openArticleId = {this.props.openArticleId}
					toogleAccordeon = {this.props.toogleAccordeon}  
				/>
			</li> 
		)	
	} 	
	render(){
		return (
				<ul>{this.getArticleList()}</ul>
				)	
	}
	
}

ArticleList.propTypes = {
	articles: PropTypes.array
}

	
export default toogleAccordeon(ArticleList)
