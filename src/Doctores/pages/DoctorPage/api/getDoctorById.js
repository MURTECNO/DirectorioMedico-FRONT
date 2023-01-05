export const getDoctorById = async (id, setDoc) => {

    try {
        const URL = `http://10.23.23.5:3001/doctores/${id}`;
        const requestOptions = {
            method: 'GET',
        }

        // fetching
        const response = await fetch(URL, requestOptions)
        const { status } = response

        // parse to json
        const data =  await response.json()
        // setDoc(data);
        return data;
        // set data
        
    } catch (error) {
        console.log({error})
    }
}