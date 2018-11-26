import { VisibilityFiltersArticle } from '../actions';

export default function articlesFilter(state = '' , action){
  console.log('action obj', action.obj)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_ARTICLE':
      return action.obj
    default:
      return state
  }
}