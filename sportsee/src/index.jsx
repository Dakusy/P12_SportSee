import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate } from 'react-router'
import './index.css';

import DashBoard from './pages/DashBoard';

import Header from './components/Header';
import SideBar from './components/Sidebar';
import Error404 from './pages/Error';


import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <div class ="app">
      <Header/>
      <div className="main-container">
      <SideBar/>
      <Routes>
      <Route exact path="/" element={<Navigate to="/profil/12/Karl" />}/>{/* Redirect to profil 12 page */}
      <Route path="/profil/:userId/:firstname" element={<DashBoard />} />
      <Route path="/profil/:userId/:firstname/activity" element={<DashBoard />} />
      <Route path="/profil/:userId/:firstname/average-sessions" element={<DashBoard />} />
      <Route path="/profil/:userId/:firstname/performance" element={<DashBoard />} />
      <Route exact path="*" element={<Error404 />}/>
      </Routes>
        </div>
        </div>
    </BrowserRouter>
    </QueryClientProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
