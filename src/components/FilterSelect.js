import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import {setVisibilityFilteArticle} from '../actions';
import {articles} from '../fixtures';

const options = articles.map((article)=>{return {value: article.id, label: article.title}});

class FilterSelect extends Component {
  state = {
    selectedOption: null,
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={(val)=>{this.handleChange(val)}}
        options={options}
        isMulti
      />
    );
  }

  handleChange = (val)=>{
    this.setState({selectedOption: val}); 
    console.log('Option selected:', val);
    this.props.onChangeSelect(val)
  }
}

export default FilterSelect
