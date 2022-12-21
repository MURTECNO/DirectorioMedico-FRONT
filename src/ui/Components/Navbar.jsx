import { MdReorder } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const Navbar = () => {

    const navigate = useNavigate();

    const onGoLogin = ()=>{
        navigate('login', {
            replace: true
        });
    }
  return (
    <>
        <div className="navBar">
            <div className="content-nav">
                <div className="navLeft">
                    <MdReorder size = {23} />
                    <Link 
                        className="navbar-brand" 
                        to="inicio"
                    >
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="navRight">
                    <button 
                        className="btn btn-primary"
                        onClick={ onGoLogin }
                    >Ingresar</button>
                </div>
            </div>
            
        </div>
        
    </>
  )
}