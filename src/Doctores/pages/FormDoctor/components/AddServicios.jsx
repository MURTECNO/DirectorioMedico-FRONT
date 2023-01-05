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
        setValNombreS('');
        setValDescripcionS('')
    }, [listServicios]);
    
    const hanldeAddServicio = () => {

        if( valNombreS === '' || valDescripcionS === '' ){
            alert('llenar los campos')
        }else{
            setDisplay('');
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
        const indexArr = index + 1;
        const deleteServicio = [...listServicios];
        const deleteNombreS = [...nombreS];
        const deleteDescripcionS = [...descripcionS];

        deleteNombreS.splice(indexArr, 1);
        deleteDescripcionS.splice(indexArr, 1);
        deleteServicio.splice(index, 1);

        setNombreS(deleteNombreS);
        setDescripcionS(deleteDescripcionS);
        setListServicios(deleteServicio);
      }

    const onBlurDescripcion1 = () => {
        console.log('onBlur')
        setNombreS([...nombreS, valNombreS]);
        setDescripcionS([...descripcionS, valDescripcionS]);
    }

    const onBlurDescripcion = () => {
        console.log('onBlur')
        if(descripcionS === '') return;
        setNombreS([...nombreS, valNombreS]);
        setDescripcionS([...descripcionS, valDescripcionS]);
    }

  return (
    <div className="col-12 " >
        {/* <hr /> */}
        <div className='ps-2 py-3 bg-info bg-opacity-25'>
            <label >Servicios *</label>
        </div>
        <div className='ms-3'>
            <label className='mt-2'>Servicio 1</label>
                <div className="d-flex mb-2 mt-1">
                    <input 
                        className="form-control" 
                        placeholder="Nombre Servicio"
                        required
                        onChange={ onNombreS }
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
                required
                onChange={ onDescripcionS }
                onBlur={ onBlurDescripcion1 }
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
                            />

                            <button 
                                type='button' 
                                className='btn btn-outline-danger ms-2'
                                onClick={ ()=>{
                                    handleDeleteServicio(index) 
                                } }
                            >Eliminar</button>
                        </div>
                        <textarea 
                            className="form-control" 
                            placeholder="Descripcion del Servicio"
                            onChange={ onDescripcionS }
                            onBlur={ onBlurDescripcion }
                        ></textarea>

                    </div>
                )
            })
        }

    </div>
  )
}
