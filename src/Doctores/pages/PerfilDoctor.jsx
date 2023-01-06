import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { InfoDoctor,ServiciosDoctor } from "./index";
import { getDoctorById } from "../pages";

import './DoctorPage/perfilStyle.css'

export const PerfilDoctor = ({ number }) => {
  const { id } = useParams();

  const [ doc, setDoc ] = useState({});
  const [ loading, setLoading ] = useState(true);
  

  useEffect(() => {
    getDoctorById(id, setDoc)
    .then( res => {

      setDoc(res);
      setLoading(false);

    })

}, [])

if(loading) return <h3>Loading</h3>;

return (
    <>
      <div className="container section">
        <div className="header-content d-flex">
          <InfoDoctor {...doc} number={number}/>
        </div>

        <div className="servicios-content my-5">
          <ServiciosDoctor {...doc}/>
        </div>

      </div> 
    </>
  );
  // if(loading) return <h2>loading...</h2> 
};
