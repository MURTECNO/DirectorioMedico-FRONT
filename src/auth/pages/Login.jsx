import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { postAuth } from "../index";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onLogin = () => {

    navigate('/formulario',{
      replace: true
    });
  }
  return (
    <>
    <div className="container mt-5">
      <h1>Login</h1>

      <hr />

      <div>
        <label >Correo:</label>
        <br />
        <input type="text" />
      </div>

      <div>
        <label >Contraseña:</label>
        <br />
        <input type="text" />
      </div>
      
      <button
      className="btn btn-primary"
      onClick={ onLogin }
      >Ingresar</button>
    </div>
    
    </>
  )
}
