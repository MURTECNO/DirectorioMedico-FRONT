import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { SearchDoctor,PerfilDoctor} from '../pages'

export const DoctoresRoute = () => {
  return (
    <>
        <Navbar/>

        <Routes>
            <Route path="inicio" element={ <SearchDoctor/> } />
            <Route path="perfil/:id" element={ <PerfilDoctor number={2}/> } />
        </Routes>

    </>
  )
}
