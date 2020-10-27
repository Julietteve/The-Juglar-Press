import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    SET_CATEGORY,
    SET_SEARCH_KEYWORD,
} from '../actions'
import {getCategoryId} from '../../utils'

const initialState = {
    hasError: false,
    isLoading: false,
    keyword: undefined,
    category: undefined,
    articles: [],
}

const reducers = (state= initialState, action) => {
    switch(action.type){
        case FETCH_ARTICLES_START:
            return{
                ...state,
                isLoading: true,
                hasError: false
            };
        case FETCH_ARTICLES_SUCCESS:
            return{
                ...state,
                isLoading: false,
                articles : action.payload.articles
            };
        case FETCH_ARTICLES_FAILURE:
            return{
                ...state,
                hasError: action.payload.error,
                articles : []
            };
        case SET_CATEGORY:
            return{
                ...state,
                isLoading: true,
                category: getCategoryId(action.payload.category),
                articles: [],
                keyword: undefined,
                trend:false
            };
        case SET_SEARCH_KEYWORD :
            return{
                ...state,
                isLoading: true,
                keyword: action.payload.keyword,
                articles: [],
            };
        default:
            return state;
    }
}

export default reducers;