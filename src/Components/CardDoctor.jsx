import { useState, useEffect } from 'react';
import perrito from '../assets/perrito.jpg'

export const CardDoctor = () => {

  const [doctores, setDoctores] = useState([]);

  const name = 'Juan';
  const lastname = 'Perez';
  const cmp = '123456';
  const celular = '987654321';
  const trayectoria = '10';
  const especialidad = 'Cardiologia';
  const sexo = '2';
  const servicio = ['1'];
  const hospital = ['1'];

  useEffect(() => {
    setDoctores([...doctores, {
      name,
      lastname,
      cmp,
      celular,
      trayectoria,
      especialidad,
      sexo,
      servicio,
      hospital
    }])
  }, [])


  const inicial = sexo === '1' ? 'Dra.' : 'Dr.';

  return (
    <>
      {/* Mostrar Doctor */}
      <div className='container-cards row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4'>
        {doctores.map((doctores, index) => {
          return (
            <div>
              <div key={index} className='card'>
                <img src={perrito} alt="" />
                <span><b>{inicial} </b>{doctores.lastname}</span>
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
