import { useState, useEffect } from 'react'
import { datos } from '../data'


export const PerfilDoctor = () => {
  
  const [doctores, setDoctores] = useState([]);
  
  useEffect(() => {
    setDoctores(datos);
  }, [])
  
  return (
    <>
      <div className="perfil-content">
        <div className="header-content">
          <div className="img-content">
            
            
          </div>
          <div className="info-content">
            
            
          </div>
        </div>
        
        <div className="servicios-content">
          
          
        </div>
      </div>
    </>
  )
}
