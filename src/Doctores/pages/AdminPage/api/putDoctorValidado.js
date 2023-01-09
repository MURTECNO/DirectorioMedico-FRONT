
export const putDoctorValidado = async ( password, id ) =>{

    const _datos= {
        password: password
    }

    try{
        const URL = `http://10.23.23.5:3001/doctores/${id}/usuarios`;
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