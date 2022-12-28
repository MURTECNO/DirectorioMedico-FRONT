import React, { useState, useEffect } from 'react'
import { getEspecialidades, getDistritos, getDoctors } from "../api";

export const InputsSearch = ({ setValEspecialidad, setValDistrito, onFilter, setDoctores}) => {

  const [especialidades, setEspecialidades] = useState([]);
  const [distritos, setDistritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEspecialidades(setEspecialidades, setLoading)
    getDistritos(setDistritos, setLoading)
  }, [])

  const onSelectEspecialidad = event => {
    const { target } = event;
    const { value } = target;
    setValEspecialidad(value);
  }

  const onSelectDistrito = event => {
    const { target } = event;
    const { value } = target;
    setValDistrito(value);
  }

  const onClickEspecialidad = event => {
    getDoctors(setDoctores, setLoading);
  }

  

  if(loading) return <h2>loading...</h2>

  return (
    <>

      <form onSubmit={ onFilter } className='row'>

        {/* especialidad */}
        <div className='input-specialty col-12 col-sm-5'>
          <select className='form-select' name="" id="" onClick={onClickEspecialidad} onChange={onSelectEspecialidad}>
          
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
            {
              distritos.map((distrito => {
                const { id, nombre } = distrito;
                return (
                  <option key={ id } value={ id }>{ nombre }</option>
                )
              }))
            }
          </select>

        </div>

        {/* btn */}
        <div className='btn-search-doctor col-2'>
          <button type='submit' className='btn btn-primary'>Buscar</button>
        </div>

      </form>
    </>

  )
}
