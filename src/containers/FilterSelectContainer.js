import { connect } from 'react-redux'
import { setVisibilityFilteArticle } from '../actions'
import FilterSelect from '../components/FilterSelect'

const mapStateToProps = (state, ownProps) => ({
//  active : ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = dispatch => {
 return {
    onChangeSelect: (val) => {
      dispatch(setVisibilityFilteArticle(val))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSelect)