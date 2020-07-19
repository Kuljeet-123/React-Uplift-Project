import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './Theme';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/faq' component={() => <div>FAQ</div>} />
          <Route exact path='/discussion' component={() => <div>Discussion</div>} />
          <Route exact path='/login' component={() => <div>Login</div>} />
          <Route exact path='/signup' component={() => <div>Sign Up</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
