import { Middleware } from 'redux';

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('當前state', store.getState());
  console.log('當前action', action);
  next(action);
  console.log('更新後state', store.getState());
};
