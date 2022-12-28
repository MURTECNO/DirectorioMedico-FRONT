import { useState, useEffect } from 'react';
import { getHospitales, getDistritos, postHospital } from '../../index'

export const AddHospital = ({
    setOptHospital,
    optHospital,

})=>{

    const [hospitales, setHospitales] = useState([]);
    const [display, setDisplay] = useState("none");
    const [distritos, setDistritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombreH, setNombreH] = useState('');
    const [distritoH, setDistritoH] = useState(0);
    const [direccionH, setDireccionH] = useState('');

    useEffect(()=>{
        getHospitales(setHospitales, setLoading);
        getDistritos(setDistritos, setLoading);
    },[]);

    const hanldeAddHospital = () => {
        const addInputHospital = [...optHospital, ''];
        setOptHospital(addInputHospital);

      };
    
    const handleDeleteHospital = (index) => {
      const deleteHospital = [...optHospital];

      deleteHospital.splice(index, 1);
      setOptHospital(deleteHospital);
    };

    const onCahangeHospital = (event, index)=>{
        const { target } = event;
        const { value } = target;
        const inputHospital = [...optHospital];

        inputHospital[index] = value;
        setOptHospital(inputHospital);

        if (value == hospitales.length + 1) {
            setDisplay("");
          }
    }

    const onNombreH = (event) => {
        const { target } = event;
        const { value } = target;
        setNombreH( value );
    }

    const onDistritoH = (event) => {
        const { target } = event;
        const { value } = target;
        setDistritoH( parseInt(value) );
    }

    const onDireccionH = (event) => {
        const { target } = event;
        const { value } = target;
        setDireccionH( value );
    }

    const onEnviarHospital = () => {
        setDisplay("none");
        
        if (nombreH === "" || distritoH=== "" || direccionH === "") {
            alert("Completar este campo");
          } else {
            postHospital( nombreH, distritoH, direccionH );
          }
    }

    const onGetData = () => {
        getHospitales(setHospitales, setLoading);
        setNombreH('');
        setDistritoH(0);
        setDireccionH('');
      };
    
    if(loading) return <h2>loading...</h2>

    return(
        <div className='col-12'>
            <label >Centro de Salud * </label>
            <br />
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={ hanldeAddHospital }
            >
                Agregar Hospital
            </button>

            {
                optHospital.map( (data, index) =>{

                    return(
                        <div key={index} className="d-flex my-3">
                            <select 
                                className='form-select'
                                onChange={ e =>{
                                    onCahangeHospital(e, index);
                                }}
                                onFocus={onGetData}
                            >
                                <option value="0">Seleccionar</option>
                                {
                                    hospitales.map(hospital => {
                                        const {id, nombre} = hospital;
                                        
                                        return(
                                            <option key={ id } value = { id }>{ nombre }</option>
                                        )
                                    })
                                }
                                <option value={hospitales.length+1}>Otro</option>
                            </select>

                            <button
                                type="button"
                                className="btn btn-outline-danger ms-2"
                                onClick={ ()=>{
                                    handleDeleteHospital(index);
                                }}
                            > Eliminar 
                            </button>
                        </div>    

                    )
                })
            }

            <div style={{ display: display }} className="row g-1">

                <div className='col-4'>
                    <label >Nombre:</label>
                    <input type="text" className='form-control' value={nombreH} onChange={ onNombreH }/>
                </div>

                <div className='col-3'>
                    <label >Distrito:</label>
                    <select className='form-select' value={distritoH} onChange={ onDistritoH }>
                        <option value="0">Seleccionar</option>
                        {
                            distritos.map( distrito =>{
                                const { id, nombre } = distrito;

                                return(

                                    <option key={ id } value={ id }>
                                        {nombre}
                                    </option>

                                )
                            })
                        }
                    </select>
                </div>

                <div className='col-4'>
                    <label >Dirección:</label>
                    <input type="text" className='form-control' value={direccionH} onChange={ onDireccionH }/>
                </div>

                <div className='col-1 mt-4 pt-1'>
                    <button type='button' className='btn btn-outline-primary' onClick={ onEnviarHospital }>Enviar</button>
                </div>
            </div>

        </div>

    )
}