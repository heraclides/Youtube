import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserState } from './components/contexts/OpenMenu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserState>
    <App />
    </UserState>
  </React.StrictMode>
);


