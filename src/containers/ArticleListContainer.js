import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { VisibilityFiltersArticle } from '../actions'
import {articles as defaultArticles} from '../fixtures'


const getVisibleArticle = (articles, obj) => {
    console.log('Article List connect defaultArticles', defaultArticles);
    console.log('obj', obj);
    if (obj && obj.length){
      const keysArr = [];
      obj.forEach((el, ind)=>keysArr.push(obj[ind].value))
      return articles.filter(article => keysArr.includes(article.id))
    }else{
      return articles
    }
 }

const mapStateToProps = state => ({
  articles: getVisibleArticle(defaultArticles, state.articlesFilter)
})

const mapDispatchToProps = dispatch => ({
//  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList)
