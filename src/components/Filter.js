import React, {Component} from 'react';
import FilterSelect from './FilterSelect';
import FilterCalendar from './FilterCalendar';

class Filter extends Component {
  
  render() {
  	return (
			<div className='block-filter'>

				<FilterSelect />
				<FilterCalendar />

			</div>
  		)
  }
}
export default Filter