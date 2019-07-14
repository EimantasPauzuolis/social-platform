import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [
        {
            id: 1,
            title: 'Article about something'
        }
    ]
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
            ...state,
            articles:[
                ...state.articles, action.payload
            ]
        }
    }
    return state;
}

export default rootReducer;
