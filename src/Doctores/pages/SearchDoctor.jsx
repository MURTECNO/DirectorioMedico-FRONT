import React, { useState, useEffect } from 'react'
import fondo from '../../assets/Vector.png'
import imgPortada from '../../assets/portada.png'
import { InputsSearch, DoctorList } from './SearchPage'
import { getDoctors } from "./SearchPage";

import './SearchPage/searchStyle.css'

const NO_SELECTED = undefined;
const NO_DISTRICT = 'Distrito';

export const SearchDoctor = () => {

        const [ doctores, setDoctores ] = useState([]);
        const [ loading, setLoading ] = useState(true);
        const [valEspecialidad, setValEspecialidad] = useState();
        const [valDistrito, setValDistrito] = useState()

        useEffect(() => {
            getDoctors(setDoctores, setLoading)
        }, [])

        const onFilter = (event, ) => {
            event.preventDefault();
            filterDoctors( valEspecialidad, valDistrito);
        }


        const filterDoctors = (especialidadFilter, districtFilter) => {
            console.log('entra al filtro '+ especialidadFilter +' '+ districtFilter);
            if(especialidadFilter === NO_SELECTED && districtFilter === NO_SELECTED){
                console.log('entra en undefined')
                return;
            }
            else{
    
                if( especialidadFilter !== undefined){
                    
                    if( districtFilter !== undefined && districtFilter !== NO_DISTRICT ){
                        console.log('entra a ambos');

                        const doctoresFiltered = doctores.filter((doctor) => {
            
                            const { especialidades = [] } = doctor;
                            const cumpleCondicionEspecialidad = especialidades.some((especialidad) => {
                                const { id } = especialidad;
                                return (String(especialidadFilter) === String(id))
                            })
                            return cumpleCondicionEspecialidad;
                
                        });
            
                        const doctoresFiltered2 = doctoresFiltered.filter( (doctor) =>{
            
                            const { hospitales = [] } = doctor;
                                const cumpleCondicionDistrito = hospitales.some((hospital) =>{
            
                                    const { distrito } = hospital; 
                                    return(String(districtFilter) === String(distrito));
            
                                })
                                return cumpleCondicionDistrito;
            
                        })
                        setDoctores(doctoresFiltered2);

                    }
                    
                    else{
            
                        const doctoresFiltered = doctores.filter((doctor) => {
                    
                            const { especialidades = [] } = doctor;
                            const cumpleCondicionEspecialidad = especialidades.some((especialidad) => {
                                const { id } = especialidad;
                                return (String(especialidadFilter) === String(id));
                            });
        
                            return cumpleCondicionEspecialidad;   
                        })   
                        setDoctores(doctoresFiltered);

                    }
                }  
                else{
                        console.log('solo distritos');
                        const doctoresFiltered = doctores.filter( (doctor) =>{
                            // console.log('solo entra a distritos');
            
                                const { hospitales = [] } = doctor;
                                    const cumpleCondicionDistrito = hospitales.some((hospital) =>{
            
                                        const { distrito } = hospital; 
                                        return(String(districtFilter) === String(distrito));
            
                                    })
                                    return cumpleCondicionDistrito;
            
                            })
                            setDoctores(doctoresFiltered);
        
                    }
                }

        }

        if(loading) return <h2>loading...</h2>        
        
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
                                setValEspecialidad={ setValEspecialidad }
                                setValDistrito={ setValDistrito }
                                onFilter={onFilter}
                                setDoctores={setDoctores}

                            />
                        </div>
                    </div>

                    <div className="mostrar-filtro mt-5">
                        <h4 className='my-4'>Staff Médico</h4>
                        <DoctorList
                            doctores={doctores}
                            setDoctores={setDoctores}
                        />
                    </div>
                </div>
            </>
        )
    }
