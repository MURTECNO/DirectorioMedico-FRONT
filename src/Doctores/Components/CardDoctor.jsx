import { Link } from 'react-router-dom'
import perrito from '../../assets/perrito.jpg'

export const CardDoctor = ({
  id,
  apellidos,
  id_sexo,
  especialidad,
}) => {

  return (
    <>
      <div key={id} className="col">
        <div className='card card-search'>

          <img className='img-format' src={perrito} alt={apellidos} />

          <span>
            <b>{id_sexo === '1' ? 'Dra.' : 'Dr.'} </b>{apellidos.split(' ')[0]}
          </span>

          {especialidad}

          <br />

          <Link to={`/perfil/${id}`}>
            <div>
              <button className='btn btn-primary btn-sm'>Ver más</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
