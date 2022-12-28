import { useState } from 'react';

export const AddServicios = ({
    listServicios,
    setListServicios,
}) => {

    const [nombreS, setNombreS] = useState('');
    const [descripcionS, setDescripcionS] = useState('');

    const hanldeAddServicio = () => {
        setListServicios([...listServicios, {
            nombre: nombreS,
            descripcion: descripcionS
        }]) ;
    };


    const onNombreS = (event) => {
        const { target } = event;
        const { value } = target;
        setNombreS( value );
    }

    const onDescripcionS  = (event) => {
        const { target } = event;
        const { value } = target;
        setDescripcionS( value );
    }

  return (
    <div className="col-12">

        <label >Servicios *</label>
        <br />
        <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={ hanldeAddServicio }
            >
                Agregar Servicio
            </button>
        <br />

        {
            listServicios.map( (data, index) =>{
                
                return (
                    <div key={ index }>
                        <div className="d-flex mt-3 mb-2">
                            <input 
                                className="form-control" 
                                placeholder="Nombre Servicio"
                                onChange={ onNombreS }
                            />
                            <button type='button' className='btn btn-outline-danger ms-2'>Eliminar</button>
                        </div>
                        <textarea 
                            className="form-control" 
                            placeholder="Descripcion del Servicio"
                            onChange={ onDescripcionS }
                        ></textarea>

                    </div>
                )
            })
        }

    </div>
  )
}
