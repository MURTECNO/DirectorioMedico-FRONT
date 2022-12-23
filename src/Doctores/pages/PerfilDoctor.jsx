import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoDoctor,ServiciosDoctor } from "./index";
import { getDoctorById } from "../pages";

import './DoctorPage/perfilStyle.css'

export const PerfilDoctor = () => {
  const { id } = useParams();

  const [ doc, setDoc ] = useState({});
  const [ loading, setLoading ] = useState(true);

  // const doc = getDoctorById( parseInt(id) );

  useEffect(() => {
    getDoctorById(id, setDoc, setLoading)
}, [])

  if(loading) return <h2>loading...</h2>

  return (
    <>
      <div className="section">
        <div className="header-content d-flex">
          <InfoDoctor {...doc}/>
        </div>

        <div className="servicios-content my-5">
          <ServiciosDoctor {...doc}/>
        </div>
      </div> 
    </>
  );
};
