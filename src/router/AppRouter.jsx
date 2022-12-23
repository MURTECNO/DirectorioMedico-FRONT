//Router principal de la aplicación
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DoctoresRoute, FormularioRoute } from '../Doctores'
import { Login } from '../auth'

export const AppRouter = () => {
  return (
    <>
        
          <Routes>
              <Route path="login" element={ <Login/> }/>
              <Route path="/*" element={ <DoctoresRoute/> }/>
              <Route path="/formulario" element={ <FormularioRoute/> }/>
            

          </Routes>
        
    </>
  )
}
