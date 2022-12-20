//Router principal de la aplicación
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchDoctor, AddDoctor } from '../Doctores'
import { Login } from '../auth'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="inicio" element={ <SearchDoctor/> } />
        <Route path="formulario" element={ <AddDoctor/> } />
        <Route path="login" element={ <Login/> }/>
      </Routes>
    </>
  )
}
