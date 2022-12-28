import { useState,useEffect } from 'react';

export const AddServicios = ({
    nombreS,
    setNombreS,
    descripcionS,
    setDescripcionS
}) => {

    const [listServicios, setListServicios] = useState([])
    const [valNombreS, setValNombreS] = useState('');
    const [valDescripcionS, setValDescripcionS] = useState('');
    const [display, setDisplay] = useState("none");

    useEffect(() => {
        console.log('entra');
        setValNombreS('');
        setValDescripcionS('')
    }, [listServicios]);
    
    const hanldeAddServicio = () => {

        if( valNombreS === '' || valDescripcionS === '' ){
            alert('llenar los campos')
        }else{
            setDisplay('');
            setNombreS([...nombreS, valNombreS]);
            setDescripcionS([...descripcionS, valDescripcionS]);
            setListServicios([...listServicios, {
                nombre: valNombreS,
                descripcion: valDescripcionS
            }]) ;
        }

        console.log('nombres servicio', valNombreS);
        console.log('listServicios: ', listServicios);

    };

    const onNombreS = (event) => {
        const { target } = event;
        const { value } = target;
        setValNombreS( value );
    }

    const onDescripcionS  = (event) => {
        const { target } = event;
        const { value } = target;
        setValDescripcionS( value );
    }

    const handleDeleteServicio = ( index ) =>{
        const deleteServicio = [...listServicios];
  
        deleteServicio.splice(index, 1);
        setListServicios(deleteServicio);
      }

  return (
    <div className="col-12 " >

        <label >Servicios *</label>
        <br />
        <div className='ms-3'>
            <label className='mt-2'>Servicio 1</label>
                <div className="d-flex mb-2">
                    <input 
                        className="form-control" 
                        placeholder="Nombre Servicio"
                        onChange={ onNombreS }
                        required
                    />

                    <button 
                        type="button" 
                        className="btn btn-outline-primary ms-2"
                        style={{'width':'12rem'}}
                        onClick={ hanldeAddServicio }
                    >Agregar Servicio</button>

                </div>
            <textarea 
                className="form-control" 
                placeholder="Descripcion del Servicio"
                onChange={ onDescripcionS }
                required
            ></textarea>
        </div>

        
        <br />

        {
            listServicios.map( (data, index) =>{
                
                return (
                    <div key={ index } className='ms-3 mb-3'>
                        <label >Servicio {index + 2 }</label>
                        <div className="d-flex mb-2">
                            <input 
                                className="form-control" 
                                placeholder="Nombre Servicio"
                                onChange={ onNombreS }
                                required
                            />

                            <button 
                                type='button' 
                                className='btn btn-outline-danger ms-2'
                                onClick={ handleDeleteServicio }
                            >Eliminar</button>
                        </div>
                        <textarea 
                            className="form-control" 
                            placeholder="Descripcion del Servicio"
                            onChange={ onDescripcionS }
                            required
                        ></textarea>

                    </div>
                )
            })
        }

    </div>
  )
}
