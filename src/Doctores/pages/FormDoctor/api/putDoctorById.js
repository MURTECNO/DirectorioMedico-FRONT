
export const putDoctorById = async ( id, nombres, apellidos, dni, cmp, celular, sexo, trayectoria, optionEspecialidad, optHospital, nombreS, descripcionS  ) =>{

    const _datos= {
        nombres: nombres,
        apellidos: apellidos,
        dni: dni,
        cmp: cmp,
        celular: celular,
        id_sexo: sexo,
        trayectoria: trayectoria,
        especialidades: optionEspecialidad,
        hospitales: optHospital,
        servicios_nombre: nombreS,
        servicios_descrip: descripcionS
    }

    try{
        const URL = `http://10.23.23.5:3001/doctores/${id}`;
        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json"}
        }

        const response = await fetch(URL, requestOptions);
        const { status } = response;

        return status;
    } catch(err){
        return err;
    }
}