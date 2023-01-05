import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link} from "react-router-dom";
import { postDoctor } from "../index"
import fondo_login from '../../assets/fondo_login.png';
import '../authStyle.css';

export const Registrar = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onBlur" });

    const [sexo, setSexo] = useState("");

    const onSubmit = (data, e) => {
        e.preventDefault();
        postDoctor(data, sexo);
    };

    const onChangeCheckradio = ({ target }) => {
        setSexo(target.value);
    };

  return (
    <div className="content-registrar d-flex">
        <div className="img-fondo">
            <img src={fondo_login} alt="" />
        </div>

        <div className="form-content p-4 my-5">

            <div>
                <h3>Registrar</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 mb-5">

                <div className="form-inputs row g-0">
                
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
                    <div className="col-6">
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

                    <div >
                        <label>Contraseña: </label>
                        <input
                        {...register("password", {
                            required: true,
                        })}
                        className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <Link to={`/login`}>
                    <button type="button" className="btn btn-primary">Regresar</button>
                </Link>
            </form>

        </div>
    </div>
  )
}
