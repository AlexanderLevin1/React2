import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
// import BillMurray from './components/BillMurray';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRedirect to="/albums" />
      <Route path='/albums' component={AllAlbums} />
      <Route path="/albums/:albumId" component={SingleAlbum} />
    </Route>
  </Router>,
  document.getElementById('app')
);





// ReactDOM.render(
//   <div>
//     <h3>FooBar</h3>
//     <Router history={hashHistory}>
//       <Route path="/hello" component={BillMurray} />
//     </Router>
//     <p>This paragraph contains words, but you knew that already.</p>
//   </div>,
//   document.getElementById('app')
//   );
