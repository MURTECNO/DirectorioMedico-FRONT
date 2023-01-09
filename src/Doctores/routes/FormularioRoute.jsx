// import { Route, Routes } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NavbarIngreso } from '../../ui'
import { AddDoctor, AdminPage, PerfilDoctor } from '../pages'

export const FormularioRoute = () => {
  return (
    <>
        <NavbarIngreso/>

        <Routes>
          <Route path="admin" element ={ <AdminPage/>}/>
          <Route path="perfilEdit/:id" element ={ <PerfilDoctor number={1} />}/>
          <Route path="formulario/:id" element ={ <AddDoctor/>}/>
        </Routes>
    </>
  )
}
