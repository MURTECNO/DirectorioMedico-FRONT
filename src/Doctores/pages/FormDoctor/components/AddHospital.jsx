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
    const [arrHospital, setArrHospital] = useState([]);

    useEffect(()=>{
        getHospitales(setHospitales, setLoading);
        getDistritos(setDistritos, setLoading);
    },[]);

    const hanldeAddHospital = () => {
        const addInputHospital = [...arrHospital, optHospital];
        setArrHospital(addInputHospital);

      };
    
    const handleDeleteHospital = (index) => {
        const indexSelect = index + 1;
        const deleteHospital = [...optHospital];
        const deleteArrHospital = [...arrHospital];

        deleteHospital.splice(indexSelect, 1);
        deleteArrHospital.splice(index, 1);

        setOptHospital(deleteHospital);
        setArrHospital(deleteArrHospital);
    };

    const onChangeHospital = (event)=>{
        const { target } = event;
        const { value, id } = target;
        const inputHospital = [...optHospital];

        inputHospital[id] = value;
        
        if (value == hospitales.length + 1) {
            setDisplay("");
        }else{
            setOptHospital(inputHospital);
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
            {/* <hr /> */}
            <div className='ps-2 py-3 bg-info bg-opacity-25'>
                <label >Centros de Salud * </label>
            </div>
            {/* <hr /> */}

            <div className="ms-3 mt-2">
                <label>Centro de salud 1</label>
                <div className="d-flex mt-1">
                    <select 
                        className='form-select'
                        id='0'
                        required
                        onChange={ e=>{
                            onChangeHospital(e);
                        }  }
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
                        <option value={hospitales.length + 1}>Otro</option>
                    </select>

                    <button 
                        type="button" 
                        className="btn btn-outline-primary ms-2"
                        style={{'width':'12rem'}}
                        onClick={ hanldeAddHospital }
                    >Agregar Hospital</button>

                </div>
            </div>

            {
                arrHospital.map( (data, index) =>{

                    return(
                        <div key={index} className="ms-3 my-3">
                            <label>Centro de salud {index + 2}</label>
                            <div className="d-flex">
                                <select 
                                    className='form-select'
                                    id={index + 1}
                                    onChange={ e=>{
                                        onChangeHospital(e);
                                    }   }
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
                                    onClick={ () => {
                                        handleDeleteHospital(index);
                                    }}
                                > Eliminar 
                                </button>

                            </div>
                        </div>    

                    )
                })
            }

            <div style={{ display: display }} className="row g-1 ms-3">

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