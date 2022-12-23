import { FaStethoscope } from "react-icons/fa";

export const ServiciosDoctor = ({servicios}) => {
  return (
    <>
        <h3>Servicios</h3>
        <div className="d-flex">
            {
                servicios.map( serv => {
                    const { id, descripcion, nombre } = serv;
                    return (
                        <div className="card mx-2 p-3" style={{width:'13rem'}} key={ id }>
                            <center><FaStethoscope size={25}/></center>
                            <div className="mt-2">
                                <p>{ nombre }</p>
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
