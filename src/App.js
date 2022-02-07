import React from 'react';
import './App.css';
import routes from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const content = useRoutes(routes);

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
