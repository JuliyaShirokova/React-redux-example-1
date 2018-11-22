import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ArticleList from './ArticleList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    
	<ArticleList />

  </div>
)

export default App