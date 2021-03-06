import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display';
import Callback from './components/Callback';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container-fluid">
      <Router history={browserHistory}>
        <Route path="/" component={Display}/>
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
