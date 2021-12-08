import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/Firebase-config"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset
} from "firebase/auth"

const AuthContext = createContext({
  currentUser: null,
  login: () => Promise,
  logout: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(undefined)
  console.log(currentUser)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : undefined)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // for development purposes use localhost address http://localhost:3000/
  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function resetPassword(oobCode, password) {
    return confirmPasswordReset(auth, oobCode, password)
  }

  function logout() {
    return signOut(auth)
  }


  const value = {
    currentUser,
    login,
    logout,
    forgotPassword,
    resetPassword
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
