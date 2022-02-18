import { connect } from 'react-redux'
import { incrementLikesAction, decrementLikesAction } from './redux/actions'

function Likes(props) {
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {

    const { likesReducer } = state;
    return {
        likes: likesReducer.likes
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {

            return dispatch(incrementLikesAction())
        },
        onDecrementLikes: () => {

            return dispatch(decrementLikesAction())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Likes); 