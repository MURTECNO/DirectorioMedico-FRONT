import { useState } from "react";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { SiAddthis } from "react-icons/si";

export const AddDoctor = ({ onNewDoctor }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [sexo, setSexo] = useState("");
  const [servicio, setServicio] = useState([]);
  const [hospital, setHospital] = useState([""]);

  // SUBMIT FORM
  const onSubmit = (data, e) => {
    e.target.reset();
    setServicio([]); // Se inicializa el array de servicios
    setHospital([""]); // Se inicializa el array de centros
  };

  const onChangeCheckradio = ({ target }) => {
    setSexo(target.value);
  };

  // CRUD SERVICIO
  const hanldeAddServicio = () => {
    const addInputServicio = [...servicio, []];
    setServicio(addInputServicio);
  };

  const handleChangeServicio = (datoServicio, index) => {
    const inputServicio = [...servicio];
    inputServicio[index] = datoServicio.target.value;
    setServicio(inputServicio);
  };

  const handleDeleteServicio = (index) => {
    const deleteServicio = [...servicio];
    deleteServicio.splice(index, 1);
    setServicio(deleteServicio);
  };

  // CRUD CENTRO
  const hanldeAddHospital = () => {
    const addInputHospital = [...hospital, []];
    setHospital(addInputHospital);
  };

  const handleChangeHospital = (datoHospital, index) => {
    const inputHospital = [...hospital];
    inputHospital[index] = datoHospital.target.value;
    setHospital(inputHospital);
  };

  const handleDeleteHospital = (index) => {
    const deleteHospital = [...hospital];
    deleteHospital.splice(index, 1);
    setHospital(deleteHospital);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-section">

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
                {...register("lastname", {
                  required: true,
                  pattern: /^[A-Za-z]/i,
                })}
                className="form-control"
              />
              {errors?.lastname?.type === "required" && (
                <p>Completar este campo</p>
              )}
              {errors?.lastname?.type === "pattern" && (
                <p>Digitar solo texto</p>
              )}
            </div>

            {/* Nombres */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Nombres: </label>
              <input
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z]/i,
                })}
                className="form-control"
              />
              {errors?.name?.type === "required" && <p>Completar este campo</p>}
              {errors?.name?.type === "pattern" && <p>Digitar solo texto</p>}
            </div>

            {/* CMP */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>CMP: </label>
              <input
                {...register("cmp", {
                  required: true,
                  pattern: /^[1-9]{5}$/,
                })}
                className="form-control"
              />
              {errors?.cmp?.type === "pattern" && <p>Escribir 6 digitos</p>}
            </div>

            {/* Celular */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Celular: </label>
              <input 
                {...register("celular", {
                  pattern: /^[1-9]{9}$/,
                })} 
                className="form-control" 
              />
              {errors?.celular?.type === "pattern" && <p>Escribir 9 digitos</p>}
            </div>

            {/* sexo */}
            <div className="col-12">
              <div onChange={onChangeCheckradio}>
                <label htmlFor="">Género:</label>
                <br />
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="1"
                />
                <label className="ms-2">Femenino</label>
                <input
                  className="form-check-input ms-2"
                  type="radio"
                  name="inlineRadioOptions"
                  value="2"
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
            <div className="col-12">
              <label htmlFor="">Especialidad</label>
              <select
                {...register("especialidad")}
                className="form-control"
                placeholder="Seleccionar..."
                name="" 
                id=""
              >
                <option value="0">Seleccionar</option>
                <option value="1">Cardiología</option>
              </select>
            </div>

            {/* Servicio */}
            <div className="col-12 my-3">
              <label>Servicio </label>
              <IconButton 
                color="info" 
                component="label" 
                onClick={() => {
                      hanldeAddServicio();
                }}>
                <SiAddthis />
              </IconButton>

              {servicio.map((data, index) => {
                return (
                  <div key={index} className="d-flex">
                    <input
                      value={data}
                      className="form-control"
                      onChange={(e) => {
                        handleChangeServicio(e, index);
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        handleDeleteServicio(index);
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Hospital*/}
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <label>Centro de salud</label>
                <IconButton 
                  color="primary" 
                  component="label" 
                  onClick={() => {
                        hanldeAddHospital();
                  }}>
                  <SiAddthis />
                </IconButton>
              </div>

              {hospital.map((data, index) => {
                return (
                  <div key={index} className="">
                    <div className="row col-12 d-flex">
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <input
                        value={data} 
                        type="text" 
                        className="form-control"
                        placeholder="Nombre entidad"
                        onChange={(e) => {
                          handleChangeHospital(e, index);
                        }} />
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <select 
                          {...register('distrito')}
                          className="form-select"
                          name="" 
                          id=""
                        >
                          <option value="0">Distrito de la entidad</option>
                          <option value="1">San Martin de Porres</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        handleDeleteHospital(index);
                      }}
                    >
                      X
                    </button>
                  </div>
                );
              })}

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
