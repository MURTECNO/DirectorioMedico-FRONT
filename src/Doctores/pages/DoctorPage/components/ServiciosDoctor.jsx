import { FaStethoscope } from "react-icons/fa";

export const ServiciosDoctor = ({servicios}) => {
  return (
    <>
 
        <h4 className="ms-3"><b>Servicios</b></h4>
        <div className="container-servicios">
            {
                servicios.map( serv => {
                    const { id, descripcion, nombre } = serv;
                    return (
                        <div className="card card-servicio" key={ id }>
                            <div className="icons-style">
                                <FaStethoscope size={25}/>
                            </div>
                            <div className="mt-4">
                                <h6><b>{ nombre }</b></h6>
                                <p>{ descripcion }</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
