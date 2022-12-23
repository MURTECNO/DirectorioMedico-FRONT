export const getEspecialidades = async (setData, setLoading) => {

    try {
        const URL = `http://10.23.23.5:3001/especialidades`;
        const requestOptions = {
            method: 'GET',
        }

        // fetching
        const response = await fetch(URL, requestOptions)
        const { status } = response
        console.log({status})

        // parse to json
        const data =  await response.json()
        console.log({data})

        // set data
        setData(data)
        setLoading(false)
        
    } catch (error) {
        console.log({error})
    }
}