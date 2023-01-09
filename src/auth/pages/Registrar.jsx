import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postDoctor } from "../index"
import fondo_registro from '../../assets/fondo_registro.png';
import logo from '../../assets/logo.png'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import '../authStyle.css';

export const Registrar = () => {

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onBlur" });

    const [sexo, setSexo] = useState("");

    const onSubmit = (data, e) => {
        e.preventDefault();
        postDoctor(data, sexo);
        MySwal.fire({
            icon: 'info',
            title: 'Gracias!',
            text: 'Se evaluará la información y se enviarán las credenciales a su correo'
          }).then( result =>{
            if(result.isConfirmed){
                navigate('/login',{
                    replace:true
                })
            }
          })
    };

    const onChangeCheckradio = ({ target }) => {
        setSexo(target.value);
    };

  return (
    <div className="container content-registrar ">
        <div className="img-fondo">
            <img src={fondo_registro} alt="" />
        </div>

        <div className="form-content p-4 my-5">

            <div className="my-3">
                <img src={logo} style={{width: '8rem'}} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-5">

                <div className="form-inputs row">
                
                    {/* Apellidos */}
                    <div >
                        <label>Apellidos: </label>
                        <input
                        {...register("apellidos", {
                            required: true,
                            pattern: /^[A-Za-z]/i,
                        })}
                        className="form-control"
                        />
                        {errors?.apellidos?.type === "required" && (
                        <p>Completar este campo</p>
                        )}
                        {errors?.apellidos?.type === "pattern" && (
                        <p>Digitar solo texto</p>
                        )}
                    </div>

                    {/* Nombres */}
                    <div >
                        <label>Nombres: </label>
                        <input
                        {...register("nombres", {
                            required: true,
                            pattern: /^[A-Za-z]/i,
                        })}
                        className="form-control"
                        />
                        {errors?.nombres?.type === "required" && <p>Completar este campo</p>}
                        {errors?.nombres?.type === "pattern" && <p>Digitar solo texto</p>}
                    </div>
                    
                    {/*dni*/}
                    <div >
                        <label>DNI: </label>
                        <input 
                        {...register("dni", {
                            required: true,
                            pattern: /^[1-9]{8}$/,
                        })} 
                        className="form-control" 
                        />
                        {errors?.dni?.type === "required" && <p>Completar este campo</p>}
                        {errors?.dni?.type === "pattern" && <p>Escribir 8 digitos</p>}
                    </div>

                    {/* sexo */}
                    <div>
                        <div onChange={onChangeCheckradio}>
                        <label >Género:</label>
                        <br />
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            value="0"
                        />
                        <label className="ms-2">Femenino</label>
                        <input
                            className="form-check-input ms-2"
                            type="radio"
                            name="inlineRadioOptions"
                            value="1"
                        />
                        <label className="ms-2">Masculino</label>
                        </div>
                    </div>

                    <div >
                        <label>Correo: </label>
                        <input
                        {...register("email", {
                            required: true,
                        })}
                        className="form-control"
                        />
                    </div>

                </div>

                <div className="mt-3">
                    <button type="submit" className="btn btn-primary mx-2">Enviar</button>
                    <Link to={`/login`}>
                        <button type="button" className="btn btn-primary mx-2">Regresar</button>
                    </Link>

                </div>

            </form>

        </div>
    </div>
  )
}
