import React, { useEffect } from "react";
import { CardDoctor } from "./CardDoctor";

const NO_SELECTED = '0';

export const DoctorList = ({especialidadFilter, districtFilter, doctores, setDoctores}) => {

    const filterDoctors = () => {
         if(especialidadFilter === NO_SELECTED && districtFilter === NO_SELECTED) return;

         else{
             const doctoresFiltered = doctores.filter((doctor) => {
                
                 const { especialidades = [] } = doctor;
                 const cumpleCondicionEspecialidad = especialidades.some((especialidad) => {
                     const { id } = especialidad;
                     return (String(especialidadFilter) === String(id))
                 })
                 return cumpleCondicionEspecialidad;
    
            })
         
            setDoctores(doctoresFiltered);
        }
    }

    useEffect(()=>{
        filterDoctors();
    }, [especialidadFilter])

    return (
        <>
            <div className='container-cards'>
                {
                    doctores.map( doctor => {
                        const { id, apellidos, id_sexo } = doctor;
                        return (
                            <CardDoctor
                                key={ id }
                                id={ id }
                                apellidos={ apellidos }
                                id_sexo={ id_sexo }
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
