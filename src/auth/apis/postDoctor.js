
export const postDoctor = async ( data, sexo ) => {
    const {apellidos, nombres, dni, email} = data;
    const _datos = {
        nombres: nombres,
        apellidos: apellidos,
        dni: dni,
        id_sexo: sexo,
        email: email
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

        if( status === 200 ){
            alert('Registro exitoso');
          }else{
            alert('Error en el registro');
          }

        
    } catch (error) {
        
    }
}