import { FaUserMd, FaMedkit, FaHospitalAlt, FaWhatsapp } from "react-icons/fa";
import perrito from '../../../../assets/perrito.jpg'

export const InfoDoctor = (props) => {

    const {
        nombres,
        apellidos,
        cmp,
        celular,
        id_sexo,
        trayectoria,
        especialidades,
        hospitales
    } = props;

    console.log('InfoDoctor', {props})

    return (
        <>
            <div className="cuadrado">
                <img className="img-format" src={perrito} alt={apellidos} />
            </div>

            <div className="info-content m-4">

                <h4>
                    <span>{id_sexo === 1 ? 'Dra. ' : 'Dr. '}</span>
                    {`${nombres} ${apellidos}`}
                </h4>

                <div className="">
                    <p><FaUserMd/>CMP: {cmp}</p>

                    <div className="d-flex mb-3">
                        <div className="card mx-2 p-3" style={{width:'13rem'}}>
                            <center><FaMedkit size={25}/></center>
                            <div className="mt-2">
                                <ul>
                                    {
                                        especialidades.map( especialidad => {
                                            const { id, nombre } = especialidad
                                            return (
                                                <li key={ id }>
                                                    <p>{ nombre }</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex mb-3">
                        {hospitales.map(hos=>(
                            <div className="card mx-2 p-3" style={{width:'13rem'}} key={ cmp }>
                                <center><FaHospitalAlt size={25}/></center>
                                <div className="mt-2">
                                    <p>Hospital: {hos.nombre}</p>
                                    <p>Distrito: {hos.distrito}</p>
                                    <p>Dirección: {hos.direccion}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p>Trayectoria Profesional: {trayectoria}</p>

                    <button className="btn" style={{background:'#45C655', color:'#FFFFFF'}}>
                        <FaWhatsapp size={20}/> Whatsapp
                    </button>
                
                </div>
            </div>
            </>
    )
}
