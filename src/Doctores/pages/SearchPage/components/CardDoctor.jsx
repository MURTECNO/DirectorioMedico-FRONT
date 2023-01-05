import { Link } from 'react-router-dom'
import doctor from '../../../../assets/doctor.jpg'

export const CardDoctor = ({
  id,
  apellidos,
  id_sexo,
  especialidad,
  foto
}) => {
  const imgPerfil = foto? foto : doctor;

  return (
    <>
      <div className='card card-search'>

        <img className='img-format mb-2' src={ imgPerfil } alt={apellidos} />

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
