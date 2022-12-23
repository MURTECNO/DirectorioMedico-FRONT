import React, { useState, useEffect } from 'react'
import fondo from '../../assets/Vector.png'
import imgPortada from '../../assets/portada.png'
import { InputsSearch, DoctorList } from './SearchPage'

import './SearchPage/searchStyle.css'

const NO_SELECTED = '0';

export const SearchDoctor
    = () => {

        const [especialidadFilter, setEspecialidadFilter] = useState(NO_SELECTED);
        const [districtFilter, setDistrictFilter] = useState(NO_SELECTED);

        const onFilter = (event, ) => {
            event.preventDefault();
            if(especialidadFilter==NO_SELECTED && districtFilter==NO_SELECTED){
              console.log('seleccina una Especialidad o Distrito')
              return
            }
            console.log('onFilter', {especialidadSelect: especialidadFilter, distritSelect: districtFilter})
        }

        return (
            <>
                <div className=" mb-5">
                    <div className='section-vector mt-5'>
                        <img className='img-vector' src={fondo} alt="" />
                    </div>
                    <div className="search-section mt-5">
                        <div className='text-center'>
                            <img className='img-portada' src={imgPortada} alt="" />                           
                        </div>
                        <div className="search-inputs text-center p-3 row">
                            <InputsSearch
                                onFilter={ onFilter }
                                setEspecialidadFilter={ setEspecialidadFilter }
                                setDistrictFilter={ setDistrictFilter }
                            />
                        </div>
                    </div>

                    <div className="mostrar-filtro mt-5">
                        <h4 className='my-4'>Staff Médico</h4>
                        <DoctorList
                            especialidadFilter={ especialidadFilter }
                            districtFilter={ districtFilter }
                        />
                    </div>
                </div>
            </>
        )
    }
