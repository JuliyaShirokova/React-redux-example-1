import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default (OriginalComponent) => class WrappedComponent extends Component{
	state = {
		isOpen: false
	}

	render(){

		return <OriginalComponent {...this.props} {...this.state} toogleOpen={this.toogleOpen} />
	}
	toogleOpen = (ev) => {
		ev && ev.preventDefault && ev.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		})
		
	}
}