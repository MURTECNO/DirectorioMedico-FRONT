import { useEffect, useState } from "react";
import { getEspecialidades, postEspecialidad } from "../../index";
import IconButton from "@mui/material/IconButton";
import { SiAddthis } from "react-icons/si";

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
    console.log('value select: ' +value)
    
    const valueSelect = [...optionEspecialidad];
    valueSelect[ index ] = value;
    setOptionEspecialidad(valueSelect);

    if (value === especialidades.length + 1) {
      setDisplay("");
    }

  };

  const handleAddEspecialidad = () => {
    const addInputEspecialidad = [...optionEspecialidad, ''];
    setOptionEspecialidad(addInputEspecialidad);
    
  }

  const handleDeleteEspecialidad = (index) =>{
    
  }

  const onVer = ()=>{
    console.log('opciones seleccionadas' , optionEspecialidad);
  }

  if (loading) return <h2>loading...</h2>;

  return (
    <>
      <div className="col-12">

        {/* Seleccionar Especialidad */}
        <label>Especialidad</label>
        <IconButton
            color="info"
            component="label"
            onClick={() => {
                handleAddEspecialidad();
            }}
        >
            <SiAddthis />
        </IconButton>

        <select
            className="form-select"
            onChange={onEspecialidad}
            onClick={onGetData}
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

        {
            optionEspecialidad.map( (optEspecialidad, index) =>{

                return(
                    <div 
                        key={ index }
                        className="d-flex my-3"
                    >

                        <select 
                            
                            className="form-select"
                            onChange={onEspecialidad}
                            onClick={onGetData}
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
                            className="btn btn-danger mx-2"
                            onClick={() => {
                                handleDeleteEspecialidad(index);
                            }}
                        > - </button>


                    </div>
                )
            })
        }

        <button type="button" onClick={ onVer }> Ver </button>

        {/* Agregar Especialidad */}
        <div style={{ display: display }}>
          <label htmlFor="">Escribir especialidad:</label>
          <input
            type="text"
            value={valEspecialidad}
            onChange={onAgregarEspecialidad}
          />

          <button type="button" onClick={onEnviarEspecialidad}>
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
