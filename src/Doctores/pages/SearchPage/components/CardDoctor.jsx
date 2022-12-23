import { Link } from 'react-router-dom'
import perrito from '../../../../assets/perrito.jpg'

export const CardDoctor = ({
  id,
  apellidos,
  id_sexo,
  especialidad,
}) => {

  return (
    <>
      <div className='card card-search'>

        <img className='img-format mb-2' src={perrito} alt={apellidos} />

        <span className='mb-2'>
          <b>{id_sexo === 1 ? 'Dra.' : 'Dr.'} </b>{apellidos.split(' ')[0]}
        </span>

        <Link to={`/perfil/${id}`}>
          <div>
            <button className='btn btn-primary btn-sm'>Ver más</button>
          </div>
        </Link>
      </div>
    </>
  )
}
