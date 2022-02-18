import {
    INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
} from './types'

export const incrementLikesAction = () => {
    return {
        type: INCREMENT
    }
}

export const decrementLikesAction = () => {
    return {
        type: DECREMENT
    }
}

export const inputTextAction = (text) => {
    return {
        type: INPUT_TEXT,
        text
    }
}

export const commentCreate = (text, id) => {
    return {
        type: COMMENT_CREATE,
        data: { text, id }
    }
}


export const commentUpdate = (text, id) => {
    return {
        type: COMMENT_UPDATE,
        data: { text, id }
    }
}

export const commentDelete = (id) => {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function loaderOn() {
    return {
        type: LOADER_DISPLAY_ON,
    }
}

export function loaderOff() {
    return {
        type: LOADER_DISPLAY_OFF,
    }
}


export function errorOn(text) {
    return {
        type: ERROR_DISPLAY_ON,
        text
    }
}

export function errorOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}

export function commentsLoad() {
    return async dispatch => {
        try {
            dispatch(loaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            const jsonData = await response.json()
            setTimeout(() => {
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData
                })
                dispatch(loaderOff())
            }, 1000)
        } catch (error) {
            dispatch(errorOn('Ошбика API'))
            dispatch(loaderOff())
        }

    }
}