import React from 'react';
import { StackNavigator } from 'react-navigation';
import Repositories from 'pages/Repositories/Container';
import Issues from 'pages/Issues/Container';

import 'config/reactotron';

const Route = StackNavigator({
  Repositories: { screen: Repositories },
  Issues: { screen: Issues }
});

const App = () => (
  <Route />
);

export default App;
