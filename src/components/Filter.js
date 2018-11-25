import React, {Component} from 'react';
import FilterSelectContainer from '../containers/FilterSelectContainer';
import FilterCalendar from './FilterCalendar';

class Filter extends Component {
  
  render() {
  	return (
			<div className='block-filter'>

				<FilterSelectContainer />
				<FilterCalendar />

			</div>
  		)
  }
}
export default Filter