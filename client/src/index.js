import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home,AddMachine,AddUser,Login,Register, PageNotFound, Contact } from "./Pages";
import {TotalMachines,TotalUsers,OnlinelUsers,OnlinelMachines} from "./Pages/Admin/index.js";
import { Dashboard } from './Pages/Admin';
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
      <Route path="/Admin" element ={ <Dashboard />} />
      <Route path="/Admin/TotalUsers" element ={ <TotalUsers />} />
      <Route path="/Admin/OnlineUsers" element ={ <OnlinelUsers />} />
      <Route path="/Admin/TotalMachines" element ={ <TotalMachines />} />
      <Route path="/Admin/OnlineMachines" element ={ <OnlinelMachines />} />

    </Routes>
  </Provider>
</BrowserRouter>
);

