import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid'
import SingleComment from "./SingleComment";
import { commentCreate, commentsLoad } from './redux/actions'

function Comments(props) {
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        const { commentsReducer } = state;
        return commentsReducer.comments;
    })

    const dispatch = useDispatch();


    const handleInput = e => {
        setTextComment(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id))
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, []);

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(c => {
                return <SingleComment key={c.id} data={c} />
            })

            }

        </div>
    )
}

export default Comments; 