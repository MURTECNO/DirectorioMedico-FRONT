import React from 'react'

export const InputsSearch = () => {
  return (
    <>
      <div className='input-specialty col-12 col-sm-5'>
        <select className='form-select' name="" id="">
          <option value="0">Especialidad</option>
          <option value="1">Cardiología</option>
        </select>
      </div>

      <div className='input-district col-12 col-sm-5'>
        <select className='form-select' name="" id="">
          <option value="0">Distrito</option>
          <option value="1">Los Olivos</option>
        </select>
      </div>

      <div className='btn-search-doctor col-2'>
        <button className='btn btn-primary'>Buscar</button>
      </div>
    </>
  )
}
