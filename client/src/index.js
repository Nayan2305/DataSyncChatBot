import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home,ViewMachine,AddUser,Login,Register, PageNotFound, Contact, User } from "./Pages";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />        
      <Route path="/Register" element={<Register />} />
      <Route path="/ViewMachines" element={ <ViewMachine/>} />
      <Route path="/AddUser" element={ <AddUser/>} />
      <Route path="/user" element={ <User/>} />
      <Route path="/PageNotFound" element={ <PageNotFound />} />

    </Routes>
  </Provider>
</BrowserRouter>
);

