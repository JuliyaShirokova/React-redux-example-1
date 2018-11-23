import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Comment = (props)=>{
	const {comment} = props;
	return (
			<div>
				<b>{comment.user}</b>
				<p>{comment.text}</p>
			</div>
		)
}

Comment.propTypes = {
	comment: PropTypes.shape({
		id:   PropTypes.string.isRequired,
		user: PropTypes.string.isRequired,
		text: PropTypes.string
	})
}	


export default Comment