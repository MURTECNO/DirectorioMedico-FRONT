import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { SearchDoctor, AddDoctor } from '../Components'

export const DoctoresRoute = () => {
  return (
    <>
        <Navbar/>

        <Routes>
            <Route path="inicio" element={ <SearchDoctor/> } />
            <Route path="formulario" element={ <AddDoctor/> } />
        </Routes>
    </>
  )
}
