import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import EmailList from './EmailList';
import Mail from './Mail'
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import {  selectSendMessageIsOpen } from './features/mailSlice';
import { auth } from './firebase';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
function App() {
const dispatch = useDispatch()
const user = useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL
        }))
      }
    })
  },[])
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  console.log(sendMessageIsOpen);
  return (
    <Router>
      {user?
    <div className="App">
      <Header />
    
      <div className="app_body">
        <Sidebar />
       
        
      <Switch>
      <Route path="/mail">
      <Mail />
      </Route>
      <Route path="/mailList">
     <EmailList /> 
      </Route>
      </Switch>
      </div>
    
    {sendMessageIsOpen&&<SendMail />}
    </div>:<Login />}
    </Router>

  );
}

export default App;
