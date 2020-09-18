import React from 'react';

import home from './Components/home/home';
import register from './Components/register/register';
import match from './Components/match/match';
import chat from './Components/chat/Join/Join';
import messages from './Components/chat/Chat/Chat';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={home} />
      <Route path="/register" exact component={register} />
      <Route path="/match" exact component={match} />
      <Route path="/chat" component={chat} />
      <Route path="/messages" component={messages} />
    </Router>
  );
}

export default App;
