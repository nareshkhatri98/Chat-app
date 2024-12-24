import React, { useState, useEffect } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/firebase';
import { toast } from 'react-toastify';
import upload from '../../lib/upload';
const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevImage] = useState("");

  const updateProfile = async (event)=>{
    event.preventDefault();
  try {
    if(!prevImage && !image)
      {
        toast.error("upload profile picture");
      }
      const docRef  = doc(db,'users',uid)
      if(image)
      {
        const imgUrl = await upload(image)
        setPrevImage(imgUrl);
        await updateDoc(docRef, {
          avatar: imgUrl,
          name: name,
          bio: bio
        })


      }
      else{
        await updateDoc(docRef, {
          avatar: imgUrl,
          name: name,
          bio: bio
        })

      }
    
  } catch (error) {
    
  }
    
    
  }


 useEffect(()=>{
  onAuthStateChanged(auth, async(user)=>{
    if(user){
      setUid(user.uid);
     const docRef = doc(db,'users',user.uid);
     const docSnap = await getDoc(docRef);
     if(docSnap.data().name){
      setName(docSnap.data().name)
     }
     if(docSnap.data().bio){
      setBio(docSnap.data().bio)
     }
     if(docSnap.data().avatar){
      setPrevImage(docSnap.data().avatar)
     }
    }
    else{
      navigate('/')

    }
  })

 }, [])

  return (
    <div className='profile'>
      <div className="profile-container">
        <form  onSubmit={updateProfile}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={ image?URL.createObjectURL(image): assets.avatar_icon} alt="" />
            Upload profile image 
          </label>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Your name' required />
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio} placeholder='Write profile bio' required></textarea>
          <button type='submit'>Save</button>
        </form>
        <img  className='profile-pic' src={ image ? URL.createObjectURL(image): assets.logo_icon} alt="" />
      </div>
    
    </div>
  )
}

export default ProfileUpdate