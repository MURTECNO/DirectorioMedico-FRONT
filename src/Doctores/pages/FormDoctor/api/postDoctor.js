
export const postDoctor = async (data, sexo, optionEspecialidad, optHospital, nombreS, descripcionS, setStatus) => {
    const {apellidos, nombres, cmp, celular, dni, trayectoria} = data;
    const _datos = {
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

    try {
        const URL = "http://10.23.23.5:3001/doctores";
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json"}
        }

        const response = await fetch(URL, requestOptions);
        const { status } = response;
        setStatus(status);

        if( status === 200 ){
            alert('Registro exitoso');
          }else{
            alert('Error en el registro');
          }

        
    } catch (error) {
        
    }
}