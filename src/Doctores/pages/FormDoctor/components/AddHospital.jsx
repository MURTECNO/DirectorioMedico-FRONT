import { useState, useEffect } from 'react';
import { getDistritos, postHospital } from '../../index'

export const AddHospital = ()=>{

    const [distritos, setDistritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombreH, setNombreH] = useState('');
    const [distritoH, setDistritoH] = useState(0);
    const [direccionH, setDireccionH] = useState('');

    useEffect(()=>{
        getDistritos(setDistritos, setLoading);
    },[]);

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

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('distrito: '+ distritoH)
        postHospital( nombreH, distritoH, direccionH );
    }
    
    if(loading) return <h2>loading...</h2>

    return(
        <>

        <form onSubmit={ onSubmit }>

            <label >Nombre:</label>
            <input type="text" onChange={ onNombreH }/>

            <label >Distrito:</label>
            <select name="" id="" onChange={ onDistritoH }>
                <option value="0">Seleccionar</option>
                {
                    distritos.map( distrito =>{
                        const { id, nombre } = distrito;

                        // console.log(distrito);
                        return(

                            <option key={ id } value={ id }>
                                {nombre}
                            </option>

                        )
                    })
                }
            </select>

            <label >Dirección:</label>
            <input type="text" onChange={ onDireccionH }/>

            <button type="submit">Enviar</button>
        </form>
        </>
    )
}