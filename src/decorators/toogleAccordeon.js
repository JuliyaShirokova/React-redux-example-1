import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default (OriginalComponent) => class AccordeonComponent extends Component{
	state = {
		openArticleId: ''
	}

	render(){

		return <OriginalComponent {...this.props}  {...this.state} toogleAccordeon = {this.toogleAccordeon} />
	}


	toogleAccordeon = (articleId) => {

		if(this.state.openArticleId === articleId){
			this.setState({
				openArticleId: ''
			})	
		}else{
			this.setState({
				openArticleId:  articleId
			})
		
		}

		
	}
	
}