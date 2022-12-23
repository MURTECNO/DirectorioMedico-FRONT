import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { SearchDoctor} from '../Components'
import { PerfilDoctor, SearchPage, DoctorPage } from '../pages'

export const DoctoresRoute = () => {
  return (
    <>
        <Navbar/>
        <div className=''>
        <Routes>
            <Route path="inicio" element={ <SearchDoctor/> } />
            <Route path="search" element={ <SearchPage/>} />
            <Route path="doctor" element={ <DoctorPage/>} />
            <Route path="perfil/:id" element={ <PerfilDoctor/> } />
        </Routes>
        </div>
    </>
  )
}
