import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { AddEspecialidad, AddHospital, AddServicios, postDoctor } from "./index";
import { useParams, Link } from 'react-router-dom';
import { getDoctorById, putDoctorById, putImageDoctor } from "../pages";

export const AddDoctor = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });


  const { id } = useParams();
  
  const [ doc, setDoc ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [sexo, setSexo] = useState("");
  const [optionEspecialidad, setOptionEspecialidad] = useState([]);
  const [optHospital, setOptHospital] = useState([]);
  const [nombreS, setNombreS] = useState([]);
  const [descripcionS, setDescripcionS] = useState([]);
  const [status, setStatus] = useState(0);
  const [image, setImage] = useState({});

  useEffect(()=>{
    getDoctorById( id, setDoc, setLoading);
  },[]);

  // SUBMIT FORM
  const onSubmit = (data, e) => {
    console.log('entra');
    console.log(data);
    postDoctor(data, sexo, optionEspecialidad, optHospital, nombreS, descripcionS, setStatus);
    putDoctorById( id, data, sexo);
    
  };

  const onVer = ()=>{

    const data = {
      "especialidades": optionEspecialidad,
      "hospitales": optHospital,
      "servicios_nombre": nombreS,
      "servicios_descrip": descripcionS
    }

  }

  const onChangeCheckradio = ({ target }) => {
    setSexo(target.value);
  };

  const onChangeImage = ( event ) =>{
    const file = event.target.files[0];
    setImage(file);
  } 

  const clickPrueba = async ()=>{
    console.log('entra')
    putImageDoctor( image, id );

  }

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
                name="image"
                hidden
                onChange={ onChangeImage }
              />
              <PhotoCamera />
            </IconButton>
          </div>

          <div className="form-inputs row mt-5 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            
            {/* Apellidos */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Apellidos: </label>
              <input value={doc.apellidos}
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
              <input value={doc.nombres}
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
              <input value={doc.cmp}
                {...register("cmp", {
                  required: true,
                  pattern: /^[1-9]{6}$/,
                })}
                className="form-control"
              />
              {errors?.cmp?.type === "required" && <p>Completar este campo</p>}
              {errors?.cmp?.type === "pattern" && <p>Escribir 6 digitos</p>}
            </div>

            {/* Celular */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Celular: </label>
              <input value={doc.celular}
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
              <input value={doc.dni}
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
              <textarea value={doc.trayectoria}
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
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
              <Link to={`/login/perfilEdit/${id}`}>
                <button className="btn btn-primary ms-3"> Regresar</button>
              </Link>
              <button type="button" onClick={clickPrueba}>Prueba</button>
            </div>

          </div>
      </form>
    </>
  );
};
