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
    const onEspecialidad = (event, index) => {
      const { target } = event;
      const { value } = target;
      const inputEspecialidad = [...optionEspecialidad];

      inputEspecialidad[index] = value;
      setOptionEspecialidad(inputEspecialidad);

      if (value == especialidades.length + 1) {
        setDisplay("");
      }

    };

    const handleAddEspecialidad = () => {
      const addInputEspecialidad = [...optionEspecialidad, ''];
      setOptionEspecialidad(addInputEspecialidad);
    }

    const handleDeleteEspecialidad = ( index ) =>{

      const deleteEspecialidad = [...optionEspecialidad];

      deleteEspecialidad.splice(index, 1);
      setOptionEspecialidad(deleteEspecialidad);

    }

    const onVer = ()=>{
      console.log('opciones seleccionadas' , optionEspecialidad);
    }

    if (loading) return <h2>loading...</h2>;

    return (
        <>

          {/* Seleccionar Especialidad */}
          <label>Especialidad *</label>
          <br />
          <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={ handleAddEspecialidad }
          >
               Agregar Especialidad
          </button>

          {
              optionEspecialidad.map( (data, index) =>{

                  return(
                      <div 
                          key={ index }
                          className="d-flex my-3"
                      >

                          <select 
                              className="form-select"
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
                  )
              })
          }

          {/* <button type="button" onClick={ onVer }> Ver </button> */}

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
        </>
    );
};
