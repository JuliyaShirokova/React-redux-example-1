import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ArticleListContainer from '../containers/ArticleListContainer'
import Filter from './Filter'
import {articles as defaultArticles} from '../fixtures'


class App extends React.Component{

	
	render(){
	  	return (
	  		<div>
			    <AddTodo />
			    <VisibleTodoList />
			    <Footer />
			    <Filter />
				<ArticleListContainer articles = {defaultArticles} />
			  </div>
			)  
	}
}

export default App