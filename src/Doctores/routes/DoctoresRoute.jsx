import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { SearchDoctor} from '../Components'
import { SearchPage, DoctorPage } from '../pages'

export const DoctoresRoute = () => {
  return (
    <>
        <Navbar/>

        <Routes>
            <Route path="inicio" element={ <SearchDoctor/> } />
            <Route path="search" element={ <SearchPage/>} />
            <Route path="doctor" element={ <DoctorPage/>} />
        </Routes>
    </>
  )
}
