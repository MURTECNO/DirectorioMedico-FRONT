import { MdReorder } from "react-icons/md";
import { Link} from 'react-router-dom';
import logo from '../../assets/logo.png'

export const Navbar = () => {
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
                <Link 
                    className="navbar-brand" 
                    to="login"
                >
                    <button className="btn btn-primary">Ingresar</button>
                </Link>
            </div>
        </div>
        
        
    </div>
        
    </>
  )
}
