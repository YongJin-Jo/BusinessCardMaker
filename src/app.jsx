import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({FileInput, authService,cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/BusinessCardMaker">
            <Login authService={authService} />
          </Route>
          <Route path="/BusinessCardMaker/maker">
            <Maker 
            FileInput={FileInput} 
            authService={authService} 
            cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
