import { MdReorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const NavbarIngreso = () => {

    const navigate = useNavigate();

    const onLogout = ()=>{
        navigate('/inicio', {
            replace: true
        });
    }
  return (
    <>
        <div className="navBar">
            <div className="content-nav">
                <div className="navLeft">
                    {/* <MdReorder size = {23} />
                    <img src={logo} alt="" /> */}

                </div>

                <div className="navRight">
                    <button 
                        className="btn btn-primary"
                        onClick={ onLogout }
                    >salir</button>
                </div>
            </div>
            
        </div>
        
    </>
  )
}