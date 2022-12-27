
export const postEspecialidad = async( valEspecialidad, setStatus ) => {

    const _datos = {
        nombre: valEspecialidad
    }

    try{
        const URL = "http://10.23.23.5:3001/especialidades";
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json"}
        }

        const response = await fetch(URL, requestOptions);
        const { status } = response;

        //set data
        setStatus(status);

    } catch (err){
        console.log(err);
    }
}