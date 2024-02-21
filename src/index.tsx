import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HashRouter basename={'/' || '/komus'}>
      <App />
    </HashRouter>
  </StrictMode>
);

reportWebVitals();
