import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();


    const Index = () => {
      return (
              <MuiThemeProvider theme={theme} >
              <App />
              </MuiThemeProvider>
        )
    }


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
