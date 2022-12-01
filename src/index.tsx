import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";  
import Games from './components/Games';
import Country from './pages/Country';
import Group from './pages/Group';
import { ChakraProvider } from '@chakra-ui/react'
import WorldCupContextProvider from './context/WorldCupContext';
import Home from './pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/country/:countryName",
        element: <Country/>
      },
      {
        path: "/group/:groupName",
        element: <Group/>
      }
    ], 
  },
]);

root.render(
  <React.StrictMode>
  <WorldCupContextProvider>
  <ChakraProvider>
  <RouterProvider router={router} />
  </ChakraProvider>
  </WorldCupContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
