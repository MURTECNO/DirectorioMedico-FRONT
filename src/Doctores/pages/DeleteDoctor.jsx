import { useEffect, useState } from "react";
import { getDoctors } from "./SearchPage"

export const DeleteDoctor = () => {

    const [doctores, setDoctores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getDoctors(setDoctores, setLoading);
    }, [])

    if(loading) return <h3>Loading...</h3>

  return (
    <>
        
    </>
  )
}
