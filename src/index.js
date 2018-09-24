import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Route, Router } from 'react-router';
import { combineReducers, createStore } from 'redux';
import App from './App';
import MenuAnimation from './pages/MenuAnimation/MenuAnimation';
import MobileBottomMenu from './pages/MobileBottomMenu/MobileBottomMenu';
import Tabbed from './pages/Tabbed/Tabbed';
import { exampleReducer } from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import LoadingImage from './pages/LoadingImage/LoadingImage';
import 'react-rangeslider/lib/index.css';
import './index.css';

const store = createStore(combineReducers({
  exampleReducer
}));

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="menuanimation" component={MenuAnimation}/>
          <Route path="tabbed" components={Tabbed} />
          <Route path="bottom-menu" components={MobileBottomMenu} />
          <Route path="loading-image" components={LoadingImage} />
        </Route>
      </Router>
    </Provider>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
