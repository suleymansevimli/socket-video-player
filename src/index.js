import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SocketProvider} from "./providers/SocketProvider";

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
      <SocketProvider>
        <App />
      </SocketProvider>
  </StrictMode>,
  document.getElementById('root')
);

