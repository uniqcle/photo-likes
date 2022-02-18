import { INPUT_TEXT } from "./types"

const initialState = {
    likes: ''
}

export const inputReducer = (state = initialState, action) => {

    switch (action.type) {

        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }

        default: return state;
    }
}