import { FaUserMd, FaMedkit, FaHospitalAlt, FaWhatsapp } from "react-icons/fa";
import {  Link } from "react-router-dom";
import { useEffect, useState } from "react";
import doctor from '../../../../assets/doctor.jpg'

export const InfoDoctor = (props) => {
    const {
        id,
        nombres,
        apellidos,
        cmp,
        celular,
        id_sexo,
        trayectoria,
        especialidades,
        foto,
        hospitales,
        number
    } = props;

    const imgPerfil = foto? foto : doctor;
    const url = `https://api.whatsapp.com/send?phone=+51${celular}&text=Hola, me gustaría separar una cita con usted`

    const [ display, setDisplay] = useState('none'); 

    useEffect(() => {
        if(number === 1){
          setDisplay('');
        }
      
    }, [])
    


    return (
        <div className="container info-section d-flex">
            <div className="cuadrado">
                <img className="img-format mt-2" src={imgPerfil} alt={apellidos} />
            </div>

            <div className="info-content card">
                <div className="pt-3 card-header">
                    <h3>
                        <b>
                            <span className="ps-4">{id_sexo === 0 ? 'Dra. ' : 'Dr. '}</span>
                            {`${nombres} ${apellidos}`}
                        </b>
                    </h3>
                </div>

                <div className="card-body">
                    <div className="me-1 ps-4">
                        <b><span><FaUserMd size={15} className='mb-1 me-2'/>CMP: </span></b> 
                        {cmp}
                    </div>

                    <div className="me-1 my-3 d-flex ps-4">
                        <b><FaMedkit size={15} className='mb-1 me-2'/>Especialidad: </b>
                        {
                            especialidades.map( especialidad => {
                                const { id, nombre } = especialidad
                                return (
                                    <div key={ id } className="mx-1">
                                        { nombre } //
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="ps-4">
                        {
                            hospitales.map( (data, index) => {
                                if(!hospitales) return;
                                const { nombre } = data
                                return (
                                    <div key={ index }>
                                        <b><span><FaHospitalAlt size={15} className='mb-1 me-2 my-1'/>Hospital: </span></b>
                                        {nombre}
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="my-3 ps-4">
                        <b>Trayectoria Profesional: </b> 
                        <ul>
                            {trayectoria}
                        </ul>
                    </div>

                    <div className="d-flex">
                        <a target="_blank" href={url}>
                            <div className="btn my-2 ms-4" style={{background:'#45C655', color:'#FFFFFF'}}>
                                <FaWhatsapp size={20} className='mb-1 me-1'/> Whatsapp
                            </div>
                        </a>

                        <div style={{ display: display }}>
                            <Link to={`/login/formulario/${id}`}>
                                <button className="btn btn-primary mt-2 mx-3">Editar</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
  
            </div>
        </div>
    )
}
