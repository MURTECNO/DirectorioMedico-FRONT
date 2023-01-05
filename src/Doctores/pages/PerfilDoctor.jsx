import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoDoctor,ServiciosDoctor } from "./index";
import { getDoctorById } from "../pages";
import { Link } from 'react-router-dom'

import './DoctorPage/perfilStyle.css'

export const PerfilDoctor = ({ number }) => {
  const { id } = useParams();

  const [ doc, setDoc ] = useState({});
  const [ loading, setLoading ] = useState(true);
  const [ display, setDisplay] = useState('none'); 

  useEffect(() => {
    getDoctorById(id, setDoc)
    .then( res => {
      
      setDoc(res);
      setLoading(false);

    })

    if(number === 1){
      setDisplay('');
    }
}, [])

if(loading) return <h3>Loafing</h3>;

return (
    <>
      <div className="section">
        <div className="header-content d-flex">
          <InfoDoctor {...doc}/>
        </div>

        <div className="servicios-content my-5">
          <ServiciosDoctor {...doc}/>
        </div>

        <div style={{ display: display }}>
          <Link to={`/login/formulario/${id}`}>
            <button>Editar</button>
          </Link>
        </div>
      </div> 
    </>
  );
  // if(loading) return <h2>loading...</h2> 
};
