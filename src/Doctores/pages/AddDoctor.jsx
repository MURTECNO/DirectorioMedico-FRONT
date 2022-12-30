import { useState } from "react";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { AddEspecialidad, AddHospital, AddServicios, postDoctor } from "./index";

export const AddDoctor = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [sexo, setSexo] = useState("");
  const [optionEspecialidad, setOptionEspecialidad] = useState([]);
  const [optHospital, setOptHospital] = useState([]);
  const [nombreS, setNombreS] = useState([]);
  const [descripcionS, setDescripcionS] = useState([]);
  const [status, setStatus] = useState(0);

  // SUBMIT FORM
  const onSubmit = (data, e) => {
    console.log('entra');
    console.log(data);
    postDoctor(data, sexo, optionEspecialidad, optHospital, nombreS, descripcionS, setStatus);

  };

  const onVer = ()=>{

    const data = {
      "especialidades": optionEspecialidad,
      "hospitales": optHospital,
      "servicios_nombre": nombreS,
      "servicios_descrip": descripcionS
    }
    // console.log('nombres: ' , nombreS);
    // console.log('descripciones: ' , descripcionS);
    console.log('Detalles del doctor:' , data);
  }

  const onChangeCheckradio = ({ target }) => {
    setSexo(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-section mb-5">

          <div className="cuadrado">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                type="file"
                hidden
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <PhotoCamera />
            </IconButton>
          </div>

          <div className="form-inputs row mt-5 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            
            {/* Apellidos */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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

            {/* CMP */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>CMP: </label>
              <input
                {...register("cmp", {
                  required: true,
                  pattern: /^[1-9]{7}$/,
                })}
                className="form-control"
              />
              {errors?.cmp?.type === "required" && <p>Completar este campo</p>}
              {errors?.cmp?.type === "pattern" && <p>Escribir 7 digitos</p>}
            </div>

            {/* Celular */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Celular: </label>
              <input 
                {...register("celular", {
                  required: true,
                  pattern: /^[1-9]{9}$/,
                })} 
                className="form-control" 
              />
              {errors?.celular?.type === "required" && <p>Completar este campo</p>}
              {errors?.celular?.type === "pattern" && <p>Escribir 9 digitos</p>}
            </div>
            
            {/*dni*/}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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

            {/* Trayectoria Profesional*/}
            <div className="col-12">
              <label>Trayectoria Profesional: </label>
              <textarea
                {...register("trayectoria")}
                className="form-control"
                rows="3"
              ></textarea>
            </div>

            {/* Especialidad */}
            <AddEspecialidad 
              optionEspecialidad={optionEspecialidad} 
              setOptionEspecialidad={setOptionEspecialidad}
            />
            
            {/* Hospital*/}
            <AddHospital 
              setOptHospital={setOptHospital}
              optHospital={optHospital}
            />

            {/* Servicio */}
            <AddServicios
              nombreS={nombreS}
              setNombreS={setNombreS}
              descripcionS={descripcionS}
              setDescripcionS={setDescripcionS}
            />

            {/* <button type="button" onClick={ onVer }> Ver2 </button> */}
            <div className="col-3">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>

          </div>
      </form>
    </>
  );
};
