import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'
import { VisibilityFiltersArticle } from '../actions'
import {articles as defaultArticles} from '../fixtures'


const getVisibleArticle = (articles, id) => {
    console.log('Article List connect defaultArticles', defaultArticles);
    console.log('id', id);

    if (id === '' || id === undefined){ 
      return articles
    }else
    {
      return articles.filter(article => article.id === id)
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
