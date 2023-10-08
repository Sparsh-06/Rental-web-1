import { initializeApp } from "firebase/app";
import { signOut, onAuthStateChanged, getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { createContext, useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";




const firebaseconfig = {
  apiKey: "AIzaSyBdQvMyBvt6TyUdbFsW4Ibo0u7UzQgNVEs",
  authDomain: "auth-test-e7c64.firebaseapp.com",
  projectId: "auth-test-e7c64",
  storageBucket: "auth-test-e7c64.appspot.com",
  messagingSenderId: "532714373359",
  appId: "1:532714373359:web:288413a9473bdbfaaa1b1a",
  measurementId: "G-3FFQP2ZCWP"
};



const FirebaseContext = createContext(null)
export const app = initializeApp(firebaseconfig);
const auth = getAuth(app);
const googleprovicer = new GoogleAuthProvider()


export const useFirebase = () => useContext(FirebaseContext)


export const FirebaseProvider = (props) => {
  const signinwithgoogle = () => {
    try{
      signInWithPopup(auth, googleprovicer)
    }catch(error){
      alert("Error in Signing In with Google")
    }
  }

  const [user, setuser] = useState(null)
  const logout = async() => {
    try{
      await auth.signOut().then(alert("Signed Out Successfully"))
    }catch(error){
      console.log('Error in signing out')
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    })
  }, [])

  const islogged = user ? true : false;

  const signinuser = async (email, password) => {
    const signin = await signInWithEmailAndPassword(auth, email, password);
    return signin;
  }

  const signupuser = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName })
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  return (
    <FirebaseContext.Provider value={{ logout, signinwithgoogle, signupuser, signinuser, islogged }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

