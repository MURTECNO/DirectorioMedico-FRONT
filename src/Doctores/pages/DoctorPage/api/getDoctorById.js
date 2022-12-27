export const getDoctorById = async (id, setData, setLoading) => {

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

        // set data
        setData(data)
        setLoading(false)
        
    } catch (error) {
        console.log({error})
    }
}