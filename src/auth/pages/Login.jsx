import { useState } from "react";
import { useNavigate, Link} from "react-router-dom"
import { postAuth } from "../index";
import logo from '../../assets/logo.png'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(true);

  const navigate = useNavigate();

  const onLogin = () => {
    postAuth( email, password, setStatus )
    .then(response => {
      const { data, token, rol } = response;
      console.log(rol);
      const { id } = data;
      // debugger;
      if(rol==='administrador'){
        navigate(`/login/admin`,{
          replace: true
          });
      }else{
        navigate(`/login/perfilEdit/${id}`,{
          replace: true
          });
      }
      

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
    <div className="login-section pt-5">

      <div className="form-login p-5 ">

          <Link to={`/inicio`}>
            <img src={logo} className='mb-4' style={{width: '10rem'}}/>
          </Link>

        <div className="row">

          <div>
            <label >Correo:</label>
            <input type="text" className="form-control" onChange={ onChangeEmail } />
          </div>

          <div>
            <label >Contraseña:</label>
            <input type="text" className="form-control" onChange={ onChangePassword }/>
          </div>
          
          <div className="d-flex mt-3">
            <button
            className="btn btn-primary mx-2"
            onClick={ onLogin }
            >Ingresar</button>

            <Link to={`/registrar`}>
              <button className="btn btn-primary mx-2">Registrar</button>
            </Link>
          </div>

        </div>
      </div>

    </div>

  )
}
