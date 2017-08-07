import React from 'react';
import ReactDOM from 'react-dom';
import * as RX from 'rxjs';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render((<App />), document.getElementById('app'));
