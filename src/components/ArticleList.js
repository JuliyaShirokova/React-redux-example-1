import React, {Component} from 'react';
import Article from '../components/Article';
import PropTypes from 'prop-types';
import toogleAccordeon from '../decorators/toogleAccordeon';
import {articles} from '../fixtures'

const ArticleList = (props) => {

	const getArticleList = ()=>{
		return articles.map(
			(article) => <li key={article.id}>
				<Article 
					article = {article} 
					openArticleId = {props.openArticleId}
					toogleAccordeon = {props.toogleAccordeon}  
				/>
			</li> 
		)	
	} 	

	return (
			<ul>{getArticleList()}</ul>
			)
}

ArticleList.propTypes = {
	articles: PropTypes.array
}

	
export default toogleAccordeon(ArticleList)
