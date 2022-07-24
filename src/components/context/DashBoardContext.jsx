import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
 const AuthContextProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false)
  }
  return (
    <AuthContext.Provider value={
      {
        handleClickOpen,
        handleClickClose,
        setIsOpen,
        isOpen
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
