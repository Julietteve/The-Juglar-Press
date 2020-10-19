export const FETCH_ARTICLES_START = ' FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';

export const fetchArticlesStart = () =>(
    {
        type: FETCH_ARTICLES_START,
    }
)

export const fetchArticlesSuccess = (articles) =>(
    {
        type: FETCH_ARTICLES_SUCCESS,
        payload : {articles}
    }
)

export const fetchArticlesFailure = (error) =>(
    {
        type: FETCH_ARTICLES_FAILURE,
        payload: {error}
    }
)

export const setCategory = (category) => (
    {
        type: SET_CATEGORY,
        payload: {category}
    }
)

export const setSearchKeyword = (keyword) =>(
    {
        type: SET_SEARCH_KEYWORD,
        payload: {keyword}
    }
)
