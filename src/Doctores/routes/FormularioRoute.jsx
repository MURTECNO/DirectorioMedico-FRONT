// import { Route, Routes } from 'react-router-dom'
import { NavbarIngreso } from '../../ui'
import { AddDoctor } from '../Components'

export const FormularioRoute = () => {
  return (
    <>
        <NavbarIngreso/>

        <AddDoctor/>
        {/* <Routes>
            <Route path="formulario" element={ <AddDoctor/> } />
        </Routes> */}
    </>
  )
}
