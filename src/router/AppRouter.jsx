//Router principal de la aplicación
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DoctoresRoute, FormularioRoute } from '../Doctores'
import { Login, Registrar } from '../auth'

export const AppRouter = () => {
  return (
    <>
        
          <Routes>
              <Route path="login" element={ <Login/> }/>
              <Route path="registrar" element={ <Registrar/> }/>
              <Route path="/*" element={ <DoctoresRoute/> }/>
              <Route path="/login/*" element={ <FormularioRoute/> }/>
              <Route path="/" element={ <Navigate to='inicio'/> }/>
            
          </Routes>
        
    </>
  )
}
