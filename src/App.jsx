import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user); 
      if (user) {
        
        navigate('/chat');
      } else {
        
        navigate('/');
        console.log("User is not logged in");
      }
    });
  }, []); 

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
      {/* Add ToastContainer here */}
      <ToastContainer />
    </>
  );
};

export default App;
