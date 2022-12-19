//Router principal de la aplicación
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchDoctor } from '../Components/SearchDoctor'
import { AddDoctor } from '../Components/AddDoctor'

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="inicio" element={<SearchDoctor/>} />
      <Route path="formulario" element={<AddDoctor/>} />
    </Routes>
    </>
  )
}
