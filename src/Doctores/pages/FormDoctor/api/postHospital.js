
export const postHospital = async( nombreH, distritoH, direccionH ) => {

    const _datos = {
        nombre: nombreH,
        distrito: distritoH,
        direccion: direccionH
    }

    try{
        const URL = "http://10.23.23.5:3001/hospitales";
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json"}
        }

        const response = await fetch(URL, requestOptions);
        const { status } = response;
        console.log('envio hospital: ', response);

    } catch (err){
        console.log(err);
    }
}