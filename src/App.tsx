import { Outlet } from 'react-router';
import './App.css';
import { Router } from './core/router';
import { Layout } from './core/layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
