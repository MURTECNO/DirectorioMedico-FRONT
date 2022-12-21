import { useNavigate } from "react-router-dom"

export const Login = () => {

  const navigate = useNavigate();
  const onLogin = ()=>{
    navigate('/formulario',{
      replace: true
    });
  }
  return (
    <>
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
      className="btn btn-primary"
      onClick={ onLogin }
      >Ingresar</button>
    </div>
    
    </>
  )
}
