import { useEffect, useState } from "react";
import { getEspecialidades, postEspecialidad } from "../../index";

export const AddEspecialidad = ({
  optionEspecialidad,
  setOptionEspecialidad,
  }) => {

    const [especialidades, setEspecialidades] = useState([]); //get especialidad
    const [valEspecialidad, setValEspecialidad] = useState("");
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState("");
    const [display, setDisplay] = useState("none");
    const [arrEspecialidad, setArrEspecialidad] = useState([]);

    //Get especialidad al primer renderizado
    useEffect(() => {
      getEspecialidades(setEspecialidades, setLoading);
    }, []);

    //Evento para actualizar las options del select
    const onGetData = () => {
      getEspecialidades(setEspecialidades, setLoading);
      setValEspecialidad('');
    };

    const onAgregarEspecialidad = (event) => {
      const { target } = event;
      const { value } = target;
      setValEspecialidad(value);
    };

    const onEnviarEspecialidad = () => {
      setDisplay("none");

      if (valEspecialidad === "") {
        alert("Completar este campo");
      } else {
        postEspecialidad(valEspecialidad, setStatus);
      }
    };

    //Capturar valor del select
    const onEspecialidad = (event) => {
      const { target } = event;
      const { value, id } = target;
      const inputEspecialidad = [...optionEspecialidad];

      inputEspecialidad[id] = value;
      
      if (value == especialidades.length + 1) {
        setDisplay("");
      }else{
        setOptionEspecialidad(inputEspecialidad);
      }

    };

    const handleAddEspecialidad = () => {
      const addInputEspecialidad = [...arrEspecialidad, optionEspecialidad];
      setArrEspecialidad(addInputEspecialidad);
    }

    const handleDeleteEspecialidad = ( index ) =>{
      const indexSelect = index + 1;

      const deleteEspecialidad = [...optionEspecialidad];
      const deleteArrEspecialidad = [...arrEspecialidad];

      deleteEspecialidad.splice(indexSelect, 1);
      deleteArrEspecialidad.splice(index, 1);

      setOptionEspecialidad(deleteEspecialidad);
      setArrEspecialidad(deleteArrEspecialidad);

    }

    if (loading) return <h2>loading...</h2>;

    return (
        <div className="col-12">

          {/* Seleccionar Especialidad */}
          <div className='ps-2 py-3 bg-info bg-opacity-25'>
            <label>Especialidad *</label>
          </div>

          <div className="ms-3 mt-2">
            <label>Especialidad 1</label>
            <div className="d-flex mt-1" >
              <select 
                  className="form-select"
                  id="0"
                  onChange={ e =>{
                    onEspecialidad( e );
                  }}
                  onFocus={onGetData}
              >
                  <option value="0">Seleccionar</option>
                  {
                      especialidades.map((especialidad) => {

                          const { id, nombre } = especialidad;

                          return (
                          <option key={id} value={id}>
                              {nombre}
                          </option>
                          );

                      })
                  }
                  <option value={especialidades.length + 1}>Otro</option>
              </select>

              <button 
                type="button" 
                className="btn btn-outline-primary ms-2"
                style={{'width':'14.5rem'}}
                onClick={ handleAddEspecialidad }
              >Agregar Especialidad</button>

            </div>

          </div>
          

          {
              arrEspecialidad.map( (data, index) =>{

                  return(
                      <div key={ index } className="ms-3 my-3">
                          <label>Especialidad {index + 2}</label>
                          <div className="d-flex">
                            <select 
                                className="form-select"
                                id={index+1}
                                onChange={ e =>{
                                  onEspecialidad( e, index);
                                }}
                                onFocus={onGetData}
                            >
                                <option value="0">Seleccionar</option>
                                {
                                    especialidades.map((especialidad) => {

                                        const { id, nombre } = especialidad;

                                        return (
                                        <option key={id} value={id}>
                                            {nombre}
                                        </option>
                                        );

                                    })
                                }
                                <option value={especialidades.length + 1}>Otro</option>
                            </select>

                            <button
                                type="button"
                                className="btn ms-2 btn-outline-danger"
                                onClick={ ()=>{
                                  handleDeleteEspecialidad(index);
                                }}
                            > Eliminar 
                            </button>
                          </div>
                      </div>
                  )
              })
          }

          {/* Agregar Especialidad */}
          <div style={{ display: display }} className="input-group mb-3">

            <br />
            <input
              type="text"
              value={valEspecialidad}
              onChange={onAgregarEspecialidad}
              className = "form-control"
              placeholder="Escribir Especialidad"
              aria-label="Recipient's username" aria-describedby="button-addon2"
            />

            <button 
              type="button" 
              id="button-addon2"
              onClick={onEnviarEspecialidad}
              className="btn btn-outline-primary"
            >
              Agregar
            </button>
          </div>

        </div>
    );
};
