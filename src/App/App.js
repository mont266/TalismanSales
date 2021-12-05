import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import AuthContextProvider from "../Contexts/AuthContext"
import { useAuth } from "../Contexts/AuthContext"

import Login from "../Pages/Authentication/Login"
import Home from "../Pages/Home"

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

function RequireAuth({ children }) {
  const { currentUser } = useAuth()

  if (currentUser) {
    return children
  }

  if (currentUser === null) {
    return <Navigate to="/" replace />
  }

  return null
}

export default App
