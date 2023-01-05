//Router principal de la aplicación
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DoctoresRoute, FormularioRoute } from '../Doctores'
import { Login, Registrar } from '../auth'

export const AppRouter = () => {
  return (
    <>
        
          <Routes>
              <Route path="login" element={ <Login/> }/>
              <Route path="registrar" element={ <Registrar/> }/>
              <Route path="/*" element={ <DoctoresRoute/> }/>
              {/* <Route path="/formulario" element={ <FormularioRoute/> }/> */}
              <Route path="/login/*" element={ <FormularioRoute/> }/>
            
          </Routes>
        
    </>
  )
}
