import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';// Import the CSS for react-toastify
import { AppContent, } from './context/AppContext';

const App = () => {
  const navigate = useNavigate();
  const {loadedUserData} = useContext(AppContent);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
     
      if (user) {
        
        navigate('/chat');
      
        await loadedUserData(user.uid);
      } else {
        
        navigate('/');
        console.log("User is not logged in");
      }
    });
  }, []); 

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
      {/* Add ToastContainer here */}
    </>
  );
};

export default App;
