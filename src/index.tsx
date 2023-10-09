import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import './styles/Global.css';

import Dashboard from './routes/Dashboard';
import Login from './routes/auth/Login';
import Register from './routes/auth/Register';
import ErrorPage from "./routes/ErrorPage";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <CssBaseline />
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
