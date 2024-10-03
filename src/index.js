import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Contact } from './contact';
import reportWebVitals from './reportWebVitals';


import { Men } from './men';
import { Women } from './women';

import { Blog } from './blog';
import { Page } from './page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Hedaer } from './header';

import { Capital } from './capital';
import { Babyc } from './babyc';
import { Footer } from './footer';


const routers = createBrowserRouter([{
  path: '/', element: <><Hedaer /><Capital /><Footer/></>
},
{ path: "/men", element: <><Hedaer /><Men /><Footer/></> },
{ path: "/women", element: <><Hedaer /><Women /><Footer/></> },
{ path: "/babyc", element: <><Hedaer /><Babyc /><Footer/></> },
{ path: "/page", element: <><Hedaer /><Page /><Footer/></> },
{ path: "/blog", element: <><Hedaer /><Blog /><Footer/></> },
{ path: '/contact', element: <><Hedaer /><Contact /><Footer/></> }]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
