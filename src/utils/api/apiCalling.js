import {fetchArticlesFailure,fetchArticlesStart,fetchArticlesSuccess} from '../../redux/actions'
import {formatData} from '..'

export const apiCalling = (endpoint) =>{
    return (dispatch) =>{
        dispatch(fetchArticlesStart());
        fetch(endpoint)
        .then((response)=> response.json())
        .then ((articles) =>{
            return articles.map(article => formatData(article))
        })
        .then((articles)=>{
            dispatch(fetchArticlesSuccess(articles));
        })
        .catch(()=> dispatch(fetchArticlesFailure(true)));
    }
}