import React from 'react'
import fondo from '../assets/Vector.png'
import imgPortada from '../assets/portada.png'
import { InputsSearch } from './InputsSearch'
import { CardDoctor } from './CardDoctor'

export const SearchDoctor
    = () => {
        return (
            <>
                <div className="search-header">
                    <div className='section-vector mt-5'>
                        <img className='img-vector' src={fondo} alt="" />
                    </div>
                    <div className="search-section mt-5">
                        <div className='text-center'>
                            <img className='img-portada' src={imgPortada} alt="" />                           
                        </div>
                        <div className="search-inputs text-center p-3 row">
                            <InputsSearch />
                        </div>
                    </div>
                    <div className="mostrar-filtro mt-5">
                        <h4 className='my-4'>Staff Médico</h4>
                        <CardDoctor/>
                    </div>
                </div>
            </>
        )
    }
