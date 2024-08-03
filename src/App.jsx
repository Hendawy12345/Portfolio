import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/services', element: <Services /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
