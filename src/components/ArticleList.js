import React, {Component} from 'react';
import Article from '../components/Article';
import PropTypes from 'prop-types';
import toogleAccordeon from '../decorators/toogleAccordeon';

class ArticleList extends Component{

	getArticleList = (articles)=>{
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
		console.log(this.props);
		return (
				<ul>{this.getArticleList(this.props.articles)}</ul>
				)	
	}
	
}

ArticleList.propTypes = {
	article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired,
	//from toogleAccordeon
	openArticleId: PropTypes.string,
	toogleAccordeon: PropTypes.func
}

	
export default toogleAccordeon(ArticleList)
