import {apiCalling} from '../api';
import {formatDate} from '../../utils'

const apiFetch = (dispatch, keyword, category) =>
{
    if(category && !keyword)
    {
        dispatch(apiCalling(`https://api.canillitapp.com/news/category/${category}`));
    }
    else if (keyword)
    {
        dispatch(apiCalling(`https://api.canillitapp.com/search/${keyword}`));
    }
    else
    {
        let now = new Date();
        let today = formatDate( now );
        dispatch(apiCalling(`https://api.canillitapp.com/latest/${today}`))

    }
}

export default apiFetch;