import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recommendProductReducer from './recommendProduct/recommendProductReducer';
import detailProductReducer from './detailProduct/detailProductReducer';
import { actionLog } from './middleware/actionLog';

const rootReducer = combineReducers({
  recommendProduct: recommendProductReducer,
  detailProduct: detailProductReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

export type RootState = ReturnType<typeof store.getState>;

export default store;
