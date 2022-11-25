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
  const [especialidad, setEspecialidad] = useState([]);
  const [servicio, setServicio] = useState([]);
  const [hospital, setHospital] = useState([]);

  const onSubmit = (data, e) => {
    e.target.reset();
    onNewDoctor(data, sexo, especialidad, servicio, hospital);
    setEspecialidad([]);
    setServicio([]);
    setHospital([]);
  };

  const onChangeCheckradio = ({ target }) => {
    setSexo(target.value);
  };

  // CRUD ESPECIALIDAD
  const hanldeAddEspecialidad = () => {
    const addInputEspecialidad = [...especialidad, []];
    setEspecialidad(addInputEspecialidad);
  };

  const handleChangeEspecialidad = (datoEspecialidad, index) => {
    const inputEspecialidad = [...especialidad];
    inputEspecialidad[index] = datoEspecialidad.target.value;
    setEspecialidad(inputEspecialidad);
  };

  const handleDeleteEspecialidad = (index) => {
    const deleteEspecialidad = [...especialidad];
    deleteEspecialidad.splice(index, 1);
    setEspecialidad(deleteEspecialidad);
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
      <form onSubmit={handleSubmit(onSubmit)} className="m-5">
        <div className="d-flex page-section">
          <div className="section-img">
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
          </div>

          <div className="row mt-5">
            {/* Apellidos */}
            <div className="col-12">
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
            <div className="col-12">
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
            <div className="col-12">
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
            <div className="col-12">
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

            {/* Inputs */}
            <div className="col-6 ">
              {/* Especialidad */}
              <div className="col-12">
                <label>Especialidad </label>
                <IconButton 
                  color="info" 
                  component="label" 
                  onClick={() => {
                        hanldeAddEspecialidad();
                  }}>
                  <SiAddthis />
                </IconButton>

                {especialidad.map((data, index) => {
                  return (
                    <div key={index} className="d-flex">
                      <input
                        value={data}
                        className="form-control"
                        onChange={(e) => {
                          handleChangeEspecialidad(e, index);
                        }}
                      />
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={() => {
                          handleDeleteEspecialidad(index);
                        }}
                      >
                        X
                      </button>
                    </div>
                  );
                })}
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
              <div className="col-12">
                <label>Hospital </label>
                <IconButton 
                  color="primary" 
                  component="label" 
                  onClick={() => {
                        hanldeAddHospital();
                  }}>
                  <SiAddthis />
                </IconButton>

                {hospital.map((data, index) => {
                  return (
                    <div key={index} className="d-flex my-3">
                      <input
                        value={data}
                        className="form-control"
                        onChange={(e) => {
                          handleChangeHospital(e, index);
                        }}
                      />
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
              </div>

            </div>

            <div className="col-3">
              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>

          </div>

        </div>
      </form>
    </>
  );
};
