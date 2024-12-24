import { doc, getDoc, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const AppContent = createContext();

export const AppContentProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [chatData, setChatData] = useState(null);

    const loadedUserData = async (uid) => {
        try {
            const userRef = doc(db, 'users', uid);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();

            setUserData(userData);
            if (userData.avatar && userData.name) {
                navigate('/chat');

            }
            else {
                navigate('/profile');
            }
            await updateDoc(userRef, {
                lastSeen: Date.now()
            })
            setInterval(async () => {
                if (auth.chatUser) {
                    await updateDoc(userRef, {
                        lastSeen: Date.now()
                    })

                }

            }, 60000)

        } catch (error) {

        }
    }

    const value = {
        userData,
        setUserData,
        chatData,
        setChatData,
        loadedUserData
    };

    return <AppContent.Provider value={value}>{children}</AppContent.Provider>;
};

export default AppContentProvider;