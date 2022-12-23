import React, { useState, useEffect } from 'react'
import { getEspecialidades } from "../../api";

export const InputsSearch = ({ onFiter, setEspecialidadFilter, setDistrictFilter }) => {

  const [especialidades, setEspecialidades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEspecialidades(setEspecialidades, setLoading)
  }, [])

  const onSelectEspecialidad = event => {
    const { target } = event;
    const { value } = target;
    console.log('onSelectEspecialidad', {value})
    setEspecialidadFilter(value)
  }

  const onSelectDistrito = event => {
    const { target } = event;
    const { value } = target;
    console.log('onSelectDistrito', {value})
    setDistrictFilter(value)
  }

  if(loading) return <h2>loading...</h2>

  return (
    <div>

    <form onSubmit={ onFiter }>

      {/* especialidad */}
      <div className='input-specialty col-12 col-sm-5'>
        <select className='form-select' name="" id="" onChange={onSelectEspecialidad}>
        <option value="0">Especialidad</option>
        {
            especialidades.map((especialidad => {
              const { id, nombre } = especialidad;
              return (
                <option key={ id } value={ id }>{ nombre }</option>
              )
            }))
          }
        </select>
      </div>

      {/* distrit */}
      <div className='input-district col-12 col-sm-5'>
        <select className='form-select' name="" id="" onChange={onSelectDistrito}>
          <option value="0">Distrito</option>
          <option value="1">Los Olivos</option>
          <option value="2">BREÑA</option>
        </select>
      </div>

      {/* btn */}
      <div className='btn-search-doctor col-2'>
        <button type='submit' className='btn btn-primary'>Buscar</button>
      </div>
    </form>
    </div>

  )
}
