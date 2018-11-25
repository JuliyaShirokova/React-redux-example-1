import { VisibilityFiltersArticle } from '../actions';

export default function articlesFilter(state = '' , action){
  console.log('action id', action.id)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_ARTICLE':
      return action.id
    default:
      return state
  }
}