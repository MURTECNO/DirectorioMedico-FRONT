import React from 'react'
import perrito from '../assets/perrito.jpg'
import '../styles/gird.css'

export const GirdDoctor = ({doctor}) => {

  const inicial = doctor.sexo === '1' ? 'Dra.' : 'Dr.';

  return (
  
    <div className='container-card'>
        <img src={perrito} alt="" />
        <span><b>{inicial} </b>{doctor.lastname}</span>
        {doctor.especialidad}
        <br />
        <button className='btn btn-primary'>Ver más</button>
    </div>

  )
}
