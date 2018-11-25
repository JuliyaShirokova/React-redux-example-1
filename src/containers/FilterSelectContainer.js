import { connect } from 'react-redux'
import { setVisibilityFilteArticle, VisibilityFiltersArticle } from '../actions'
import FilterSelect from '../components/FilterSelect'

const mapStateToProps = (state, ownProps) => ({
//  active : ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = dispatch => {
 return {
    onChangeSelect: (id) => {
      dispatch(setVisibilityFilteArticle(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSelect)