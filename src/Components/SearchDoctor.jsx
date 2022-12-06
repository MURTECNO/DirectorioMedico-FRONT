import React from 'react'
import fondo from '../assets/Vector.png'
import imgPortada from '../assets/portada.png'

export const SearchDoctor
 = () => {
  return (
    <>
        <div className="portada">
            <img className='img-vector' src={fondo} alt="" />
            <div className="busqueda">
                <img className='img-portada' src={imgPortada} alt="" />
                <div className="buscar-inputs">
                    <select className='form-select' name="" id="">
                        <option value="0">Especialidad</option>
                        <option value="1">Cardiología</option>
                    </select>

                    <select className='form-select' name="" id="">
                        <option value="0">Distrito</option>
                        <option value="1">Los Olivos</option>
                    </select>
                    <button className='btn btn-primary'>Buscar</button>
                </div>
            </div>
            <div className="mostrar-filtro">

            </div>
        </div>
    </>
  )
}
