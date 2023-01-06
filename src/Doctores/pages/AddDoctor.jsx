import { useEffect, useState } from "react";
import { useParams, Link, useNavigate} from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { AddEspecialidad, AddHospital, AddServicios } from "./index";
import { getDoctorById, putImageDoctor } from "../pages";
import { putDoctorById } from "./FormDoctor/api/index";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const AddDoctor = () => {

  const MySwal = withReactContent(Swal)
  const { id } = useParams();
  const navigate = useNavigate();

  const [sexo, setSexo] = useState("");
  const [optionEspecialidad, setOptionEspecialidad] = useState([]);
  const [optHospital, setOptHospital] = useState([]);
  const [nombreS, setNombreS] = useState([]);
  const [descripcionS, setDescripcionS] = useState([]);
  // const [status, setStatus] = useState(0);
  const [image, setImage] = useState({});
  const [apellidos, setApellidos] = useState('');
  const [nombres, setNombres] = useState('');
  const [cmp, setCmp] = useState('');
  const [celular, setCelular] = useState('');
  const [dni, setDni] = useState('');
  const [trayectoria, setTrayectoria] = useState('');
  const [foto, setFoto] = useState('');
  const [fchecked, setFchecked] = useState('')
  const [mchecked, setMchecked] = useState('')
  const [display, setDisplay] = useState('none');

  useEffect(()=>{
    getDoctorById( id )
    .then(doc=>{

      setApellidos(doc.apellidos);
      setNombres(doc.nombres);
      setDni(doc.dni);

      doc.cmp? setCmp(doc.cmp) : setCmp('');
      doc.celular? setCelular(doc.celular) : setCelular('');
      doc.trayectoria? setTrayectoria(doc.trayectoria) : setTrayectoria('');
      doc.foto? setFoto(doc.foto) : setDisplay('');

      if(doc.sexo === 0){
        setFchecked('checked');
        setSexo(0)
      } else{
        setMchecked('checked');
        setSexo(1)
      }
    });
    
  },[]);

  // SUBMIT FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    putImageDoctor( image, id );
    putDoctorById( id, nombres, apellidos, dni, cmp, celular, sexo, trayectoria, optionEspecialidad, optHospital, nombreS, descripcionS)
    .then(res =>{
      if(res===200){
        navigate(`/login/perfilEdit/${id}`,{
          replace: true
          });
      } else{
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'llenar todos los campos'
        })
      }
    })
  };

  const onChangeCheckradio = ({ target }) => {
    setSexo(target.value);

  };

  const onChangeImage = ( event ) =>{
    const file = event.target.files[0];
    setImage(file);
  } 

  return (
    <>
      <form onSubmit={handleSubmit} className="form-section mb-5">

          <div className="cuadrado">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <img className='img-format mb-2' src={foto} alt=""/>
              <input
                type="file"
                name="image"
                hidden
                onChange={ onChangeImage }
              />
              <div style={{display: display}}>
                <PhotoCamera />
              </div>
            </IconButton>
          </div>

          <div className="form-inputs row mt-5 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            
            {/* Apellidos */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Apellidos: </label>
              <input 
                value = {apellidos}
                onChange={ ({target}) =>{
                  setApellidos(target.value)
                }} 
                required
                className="form-control"
              />
            </div>

            {/* Nombres */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Nombres: </label>
              <input 
                value = {nombres}
                onChange={ ({target}) =>{
                  setNombres(target.value)
                }} 
                required
                className="form-control"
              />
            </div>

            {/* CMP */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>CMP: </label>
              <input 
                value = {cmp}
                onChange={ ({target}) =>{
                  setCmp(target.value)
                }} 
                required
                className="form-control"
              />
            </div>

            {/* Celular */}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>Celular: </label>
              <input 
                value = {celular}
                onChange={ ({target}) =>{
                  setCelular(target.value)
                }} 
                required
                className="form-control" 
              />
            </div>
            
            {/*dni*/}
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <label>DNI: </label>
              <input 
                value = {dni}
                onChange={ ({target}) =>{
                  setDni(target.value)
                }} 
                required
                className="form-control" 
              />
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
                  checked={fchecked}
                  readOnly
                  
                />
                <label className="ms-2">Femenino</label>
                <input
                  className="form-check-input ms-2"
                  type="radio"
                  name="inlineRadioOptions"
                  value="1"
                  checked={mchecked}
                  readOnly
                />
                <label className="ms-2">Masculino</label>
              </div>
            </div>

            {/* Trayectoria Profesional*/}
            <div className="col-12">
              <label>Trayectoria Profesional: </label>
              <textarea 
                value = {trayectoria}
                onChange={ ({target}) =>{
                  setTrayectoria(target.value)
                }} 
                required
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
              {/* <button type="button" onClick={clickPrueba}>Prueba</button> */}
            </div>

          </div>
      </form>
    </>
  );
};
