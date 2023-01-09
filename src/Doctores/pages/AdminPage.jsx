import { useState, useEffect } from 'react';
import { getDoctorsValidation } from './index'
import imgdoctor from '../../assets/doctor.jpg'
import './AdminPage/styleAdmin.css'
import { putDoctorValidado } from './AdminPage/api/putDoctorValidado';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const AdminPage = () => {

    const MySwal = withReactContent(Swal);

  const [doctores, setDoctores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('')

  useEffect( ()=>{
    getDoctorsValidation( setDoctores, setLoading );
  }, []);

  const onPassword = (event) =>{
    const { target } = event;
    const { value } = target;
    setPassword(value);
  }

  const onValidar = ( id, email ) => {

    if(password === ''){
        MySwal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Digitar contraseña'
          })

    }else{
        putDoctorValidado(password, id)
        .then(response => {
            if(response===200){
                MySwal.fire({
                    icon: 'success',
                    title: 'Registrado!',
                    text: `Enviar credenciales a ${email}`
                  }).then(getDoctorsValidation( setDoctores, setLoading ));

            }
        });

    }
  }

  if( loading ) return <h3>Loading...</h3>

  return (
    <div className='container my-4'>
        {
          
          doctores.map( doctor =>{
            const { id, nombres, apellidos, dni, email } = doctor; 

            return(
              <div key={ id } className='card-container my-4'>
                <div className="img-container">
                  <img className='img-format' src={ imgdoctor } />
                </div>

                
                <div className="info-card ms-3">
                    <h4><b>{ `${nombres} ${apellidos}` }</b></h4>
                    <span><b>DNI: </b> {dni} </span> <br />
                    <span><b>E-mail: </b> {email} </span>
                </div>

                <div className='validar-section'>
                    <input 
                        className='form-control'
                        onChange={ onPassword } 
                        placeholder='Password'
                    />
                    <button 
                        className='btn btn-success mx-2'
                        onClick={ ()=>{
                            onValidar(id, email);
                        } }
                    >Validar</button>

                </div>

              </ div>
            );
          })

        }
    </div>
  )
}
