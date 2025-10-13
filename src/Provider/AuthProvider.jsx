import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsers = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const emailVerification =()=>{
    return sendEmailVerification(auth.currentUser)
  }
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const forgotPassword = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }

  const infoAuth = {
    user,
    loading,
    setLoading,
    setUser,
    createUser,
    signInUsers,
    signOutUser,
    handleGoogleLogin,
    emailVerification,
    forgotPassword
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(false)
      }
      else{
        setUser(null)
      }
      setLoading(false)
      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <AuthContext.Provider value={infoAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
