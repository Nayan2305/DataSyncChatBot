import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home,AddMachine,AddUser,Login,Register, PageNotFound, Contact } from "./Pages";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <Routes>

      <Route path="/Home" element={<Home />} />
      <Route path="/AddUser" element={<AddUser />} />

      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />        
      <Route path="/Register" element={<Register />} />
      <Route path="/AddMachine" element={ <AddMachine/>} />
      <Route path="/PageNotFound" element={ <PageNotFound />} />

    </Routes>
  </Provider>
</BrowserRouter>
);

