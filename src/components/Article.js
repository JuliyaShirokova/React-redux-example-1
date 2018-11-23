import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';


const Article = (props) => {

	const {article, openArticleId, toogleAccordeon} = props;

	const getButtonText = () => {
		const {article, openArticleId} = props;

		return openArticleId === article.id ? 'Close' : 'Open'
	}
	
	const getBody=()=>{	
		const {article, openArticleId} = props;
		
		if (openArticleId !== article.id) return null;
	
		return  (
			<div>
				<section>{article.text}</section>
				<CommentList comments={article.comments} />
			</div>
			)

	}

		
	return (
			<div>
				<h3>{article.title}</h3>
				<button onClick={() => toogleAccordeon(article.id)}>
					{getButtonText()}
				</button>
				
				{getBody()}

			</div>
			)

}

Article.propTypes = {
	article: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string
	}).isRequired,
	//from toogleAccordeon
	openArticleId: PropTypes.string,
	toogleAccordeon: PropTypes.func
}

export default Article