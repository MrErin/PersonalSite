import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import reducers from './reducer';

const store = createStore(reducers, applyMiddleware(thunk));

const theme = createMuiTheme();

const Root = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
