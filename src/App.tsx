import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import { HomePage, DetailPage, SearchPage } from './pages';

const App = () => {
  return (
    <div className={styles["app"]}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/login' component={LoginPage} /> */}
          <Route path='/searchPage' exact component={SearchPage} />
          <Route path='/searchPage/detailPage' exact component={DetailPage} />
          <Route render={() => (<h1>404您輸入的頁面不存在</h1>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
