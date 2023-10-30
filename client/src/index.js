import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home,AddMachine,AddUser,Login,Register, PageNotFound, Contact,User,About } from "./Pages";
import { Dashboard,OnlinelMachines,OnlinelUsers,TotalMachines,TotalUsers } from './Pages/Admin';
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
      <Route path="/user" element={ <User/> } />
      <Route path="/About" element = {<About/>}/>
      <Route path="/Admin/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Admin/OnlineMachines" element={<OnlinelMachines/>}></Route>
      <Route path="/Admin/OnlineUsers" element={<OnlinelUsers/>}></Route>
      <Route path="/Admin/TotalMachines" element={<TotalMachines/>}></Route>
      <Route path="/Admin/TotalUsers" element={<TotalUsers/>}></Route>
    </Routes>
  </Provider>
</BrowserRouter>
);
