import { useState, useEffect } from 'react';
import perrito from '../../assets/perrito.jpg'
import {datos}  from '../../data.js'

export const CardDoctor = () => {

  const [doctores, setDoctores] = useState([]);
   
  useEffect(() => {
    setDoctores(datos)
  }, [])

  return (
    <>
      {/* Mostrar Doctor */}
      <div className='container-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4'>
        {doctores.map((doctores, index) => {
          return (
            <div key={index} >
              <div className='card'>
                <img src={perrito} alt="" />
                <span>
                  <b>{doctores.sexo === '1' ? 'Dra.' : 'Dr.'} </b>{doctores.lastname}
                </span>
                {doctores.especialidad}
                <br />
                <div>
                  <button className='btn btn-primary btn-sm'>Ver más</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}
