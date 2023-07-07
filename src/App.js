import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routers/Router.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);
