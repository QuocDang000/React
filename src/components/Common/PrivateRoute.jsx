import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
  const isLogin = Boolean(sessionStorage.getItem("a0.spajs.txs.iwXHXUalsZjOWyhvDJz6iWRgEDYbe6Zx"))

  return isLogin? <Route {...props} />: <Redirect to='/login' />
}

export default PrivateRoute;