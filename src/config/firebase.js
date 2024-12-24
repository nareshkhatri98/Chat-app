import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (username,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password)
        const user = res.user;
        await setDoc(doc(db,"user",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:'',
            avatar:'',
            bio:"Hey, there i am using chat app",
            lastSeen: Date.now()
        });        
        await setDoc(doc(db,'chats',user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }

}

const login =  async ( email, password) =>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))

        
    }

}
const logout =  async() =>{
    try {
        await signOut(auth); 
        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }

}

export {signup, login, logout, auth,db} 