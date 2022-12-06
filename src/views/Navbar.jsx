import { MdReorder } from "react-icons/md";
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <>
    <div className="navBar">
        <div className="content-nav">
            <div className="navLeft">
                <MdReorder size = {23} />
                <img src={logo} alt="" />
            </div>

            <div className="navRight">
                <button className="btn btn-primary">Registrar</button>
            </div>
        </div>
        
        
    </div>
        
    </>
  )
}
