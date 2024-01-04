import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useSelector, useDispatch } from 'react-redux'
import { setLogout,  setEventRun } from './features/ui/uiSlice'



import './App.css';
import './elements.css'
import './slider.css'
import './timeline.css'
import './designs.css'
import './message.css'
//import './anim.css'
//import './backgrounds.css'
import MediaCast from './view/live/MediaCast';
import MainFrame from './view/live/MainFrame'

import Login from './view/user/Login';
import Register from './view/user/Register'
import Modal from './view/inside/Modal';
import EventByname from './view/events/EventByname';
import Users from './view/user/Users'


import PrivateRoutes from './view/PrivateRoutes';
import AdminUI from './view/inside/buttons/AdminUI';

import DryRun from './view/events/DryRun';
import StepHome from './view/Steps/StepHome';
import Design from './view/events/Design'
import Logout from './view/user/Logout'
import PageNotFound from './view/other-pages/PageNotFound'
import Help from './view/other-pages/Help'
import Step1_login from './view/Steps/Step1_login'


function App() {
  // console.log("App")
  

  const dispatch = useDispatch()
  
  // const { msgStack, joinedUsers, goTo } = useSocket(  )
   
  const pageExit = (event) => {
    
    event.preventDefault()
    console.log("Logout")
    dispatch(setLogout({stat:true, content:'disconnected!'}))
    
    return (event.returnValue = 'Are you sure you want to exit?')
  }

  window.addEventListener('beforeunload', pageExit)

    //  useEffect(()=>{
    //   //  console.log(msgStack)
    //   if(Object.keys(msgStack).length === 0) return
    //   dispatch(setMessageStack(msgStack))
    //   // setNewMessage({})
    //  },[msgStack])

  
  

  return (
    <>
      <div className="App" id="app">
        
        <Router >
            <AdminUI /> 
            <Routes>
                            
              <Route path="/" element={<Step1_login />} />
              <Route path="/home" element={<PrivateRoutes />} >
                  <Route path="/home" element={<StepHome />} />
              </Route>
              <Route path="/reg" element={<Register />} />
              
              <>
                <Route path="/design" element={<PrivateRoutes />} >
                    <Route path="/design" element={<Design />} />
                </Route>
                <Route path="/edit-event" element={<PrivateRoutes />} >
                    <Route path="/edit-event" element={<DryRun />} />
                </Route>  
                <Route path="/events" element={<PrivateRoutes />} >
                    <Route path="/events" element={<MainFrame />} />
                </Route>
                <Route path="/event" element={<PrivateRoutes />} >
                    <Route path="/event" element={<EventByname />} />
                </Route>
                <Route path="/users" element={<PrivateRoutes />} >
                    <Route path="/users" element={<Users />} />
                </Route>
                <Route path="/user-edit" element={<PrivateRoutes />} >
                    <Route path="/user-edit" element={<Users />} />
                </Route>
                <Route path="/help" element={<PrivateRoutes />} >
                    <Route path="/help" element={<Help />} />
                </Route>
                <Route path="/page-not-found" element={<PrivateRoutes />} >
                    <Route path="/page-not-found" element={<PageNotFound />} />
                </Route>
                <Route path="/logout" element={<PrivateRoutes />} >
                    <Route path="/logout" element={<Logout />} />
                </Route>
              </>
                         
            </Routes> 
            <Modal />
            

      </Router>
        
            
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
