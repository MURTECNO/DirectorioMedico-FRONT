import { useState } from "react";
import { useNavigate, Link} from "react-router-dom"
import { postAuth } from "../index";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);

  const navigate = useNavigate();

  const onLogin = () => {
    postAuth( email, password, setStatus )
    .then(response => {
      const { data, token } = response;
      const { id } = data;
      // debugger;
      
      navigate(`/login/perfilEdit/${id}`,{
        replace: true
        });

    })
    .catch( err => console.log(err));
    // console.log('status desde login: '+status);
  }

  const onChangeEmail = ( event )=>{
    const { target } = event;
    const { value } = target;
    setEmail( value );
  }  

  const onChangePassword = ( event )=>{
    const { target } = event;
    const { value } = target;
    setPassword( value );
  }

  return (
    <>
    <div className="container mt-5">
      <h1>Login</h1>

      <hr />

      <div>
        <label >Correo:</label>
        <br />
        <input type="text" onChange={ onChangeEmail } />
      </div>

      <div>
        <label >Contraseña:</label>
        <br />
        <input type="text" onChange={ onChangePassword }/>
      </div>
      
      <button
      className="btn btn-primary"
      onClick={ onLogin }
      >Ingresar</button>

      <Link to={`/registrar`}>
        <button className="btn btn-primary">Registrar</button>
      </Link>
    </div>
    
    </>
  )
}
