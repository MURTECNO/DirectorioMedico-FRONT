import React, { useState, useEffect } from "react";
import { CardDoctor } from "./CardDoctor";

export const DoctorList = ({ doctores}) => {

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
