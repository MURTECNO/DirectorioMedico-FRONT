// import { Route, Routes } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NavbarIngreso } from '../../ui'
import { AddDoctor, PerfilDoctor } from '../pages'

export const FormularioRoute = () => {
  return (
    <>
        <NavbarIngreso/>

        <Routes>
          <Route path="perfilEdit/:id" element ={ <PerfilDoctor number={1} />}/>
          <Route path="formulario/:id" element ={ <AddDoctor/>}/>
        </Routes>
    </>
  )
}
