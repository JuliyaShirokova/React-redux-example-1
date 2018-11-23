import React, {Component} from 'react';
import Comment from '../components/Comment';
import PropTypes from 'prop-types';
import toogleOpen from '../decorators/toogleOpen';

const CommentList = (props) => {

	const {toogleOpen, isOpen} = props;

	const getComments = () =>{
		
		const {comments, isOpen} = props;

		if (!isOpen) return null;
		
		if (!comments.length){
			return (<li>No comments yet</li>)
		}else{
			return comments.map((comment) => <li key={comment.id}><Comment comment = {comment} /></li> )
		}

	}

	return (
		<div>
			<button onClick={toogleOpen}>
				{isOpen ? 'Hide comments' : 'Comments'}
			</button>
			<ul>{getComments()}</ul>
		</div>
		)

}

CommentList.defaultProps = {
		comments: []
}

CommentList.propTypes = {
		comments: PropTypes.array,
		//from toogleOpen
		toogleOpen: PropTypes.func,
		isOpen: PropTypes.bool
}


export default toogleOpen(CommentList)