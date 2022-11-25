import { useState } from 'react';
import { AddDoctor } from './Components/AddDoctor';
import { GirdDoctor } from './Components/GirdDoctor';

export const CardDoctor = () => {

  const [doctores, setDoctores] = useState([]);

  const onNewDoctor = ({ name, lastname, cmp, celular, trayectoria}, sexo, especialidad, servicio, hospital ) => {
    setDoctores([...doctores, {
      name: name,
      lastname: lastname,
      cmp: cmp,
      celular: celular,
      sexo: sexo,
      trayectoria: trayectoria,
      especialidad: especialidad,
      servicio: servicio,
      hospital: hospital
    }])
  }
  console.log(doctores);

  return (
    <>

      {/* Agregar Doctor */}
      <AddDoctor onNewDoctor={onNewDoctor} />

      {/* Mostrar Doctor */}
      <div className='container-cards'>
        {doctores.map((doctor, index) => {
          return (
            <div key={index} className="card m-5 p-4">
              <GirdDoctor doctor={doctor} />
            </div>

          );
        })}
      </div>
    </>
  )
}
