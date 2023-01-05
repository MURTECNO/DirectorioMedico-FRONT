import { FaUserMd, FaMedkit, FaHospitalAlt, FaWhatsapp } from "react-icons/fa";

export const InfoDoctor = (props) => {
debugger;
    const {
        nombres,
        apellidos,
        cmp,
        celular,
        id_sexo,
        trayectoria,
        especialidades,
        foto,
        hospitales
    } = props;

    const url = `https://api.whatsapp.com/send?phone=+51${celular}&text=Hola, me gustaría separar una cita con usted`

    return (
        <>
            <div className="cuadrado">
                <img className="img-format mt-2" src={foto} alt={apellidos} />
            </div>

            <div className="info-content">
                <div className="my-4">
                    <h3>
                        <b>
                            <span>{id_sexo === 0 ? 'Dra. ' : 'Dr. '}</span>
                            {`${nombres} ${apellidos}`}
                        </b>
                    </h3>
                </div>

                <div className="me-1">
                    <b><span><FaUserMd size={15} className='mb-1 me-2'/>CMP: </span></b> 
                    {cmp}
                </div>

                <div className="me-1 my-3 d-flex">
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
                <div>
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


                <div className="my-3">
                    <b>Trayectoria Profesional: </b> 
                    <ul>
                        {trayectoria}
                    </ul>
                </div>

                <a target="_blank" href={url}>
                    <div className="btn my-2" style={{background:'#45C655', color:'#FFFFFF'}}>
                        <FaWhatsapp size={20} className='mb-1 me-1'/> Whatsapp
                    </div>
                </a>
  
            </div>
            </>
    )
}
