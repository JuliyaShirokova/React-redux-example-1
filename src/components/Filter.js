import React, {Component} from 'react';
import Select from 'react-select';
import {articles} from '../fixtures';


const options = articles.map((article)=>{return {value: article.id, label: article.title}});

class Filter extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default Filter