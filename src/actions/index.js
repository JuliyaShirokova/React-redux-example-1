let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilteArticle = (id) => {
  console.log('action id', id)
  return ({
    type: 'SET_VISIBILITY_FILTER_ARTICLE',
    id
  })
} 

export const VisibilityFiltersArticle = {
  SHOW_ARTICLE_ALL: 'SHOW_ARTICLE_ALL',
  SHOW_ARTICLE_BY_ID: 'SHOW_ARTICLE_BY_ID',
  SHOW_ARTICLE_BY_DATE: 'SHOW_ARTICLE_BY DATE'
}



export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

