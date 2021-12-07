import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase/Firebase-config"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  confirmPasswordReset
} from "firebase/auth"

const AuthContext = createContext({
  currentUser: null,
  login: () => Promise,
  logout: () => Promise,
  resetPassword: () => Promise
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(undefined)

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

  function logout() {
    return signOut(auth)
  }

  function resetPassword(oobCode, password) {
    return confirmPasswordReset(auth, oobCode, password)
  }

  const value = {
    currentUser,
    login,
    logout,
    resetPassword
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
