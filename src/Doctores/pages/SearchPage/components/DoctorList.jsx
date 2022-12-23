import React, { useState, useEffect } from "react";
import { CardDoctor } from "./CardDoctor";
import { getDoctors } from "../api";

const NO_SELECTED = '0';

export const DoctorList = ({ especialidadFilter, districtFilter }) => {

    const [ doctores, setDoctores ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const filterDoctors = () => {
        if(especialidadFilter == NO_SELECTED && districtFilter == NO_SELECTED) return;

        const doctoresFiltered = doctores.filter((doctor) => {
            const { especialidades = [] } = doctor;

            const cumpleCondicionEspecialidad = especialidades.some((especialidad) => {
                const { id } = especialidad;
                return (String(especialidadFilter) == String(id))
            })
            return cumpleCondicionEspecialidad;

        })

        setDoctores(doctoresFiltered)
    }

    useEffect(() => {
        getDoctors(setDoctores, setLoading)
    }, [])

    useEffect(() => {
        filterDoctors()
    }, [especialidadFilter, districtFilter])

    if(loading) return <h2>loading...</h2>

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
