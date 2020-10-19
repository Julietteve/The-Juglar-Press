import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

 const storeFactory = () => createStore(reducers, applyMiddleware(thunk));

 export default storeFactory;
