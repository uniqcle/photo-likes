import { COMMENT_CREATE } from './types'
import { errorOn } from './actions'
const badWords = ['козел', 'осел']

export function spamFilter(store) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                //console.log('spam filter', action.data.text)
                const hasBadWords = badWords.some(w => action.data.text.includes(w))
                if (hasBadWords) {
                    return store.dispatch(errorOn('уважайте людей'))
                }
            }
            return next(action)
        }
    }
}