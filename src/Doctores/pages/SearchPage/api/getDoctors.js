// async-aeait
export const getDoctors = async (setData, setLoading) => {

    try {
        const URL = 'http://10.23.23.5:3001/doctores';
        const requestOptions = {
            method: 'GET',
            // body: JSON.stringify({

            // })
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

// promises
// export const getDoctors = (setData, setLoading) => {
//     const URL = 'http://10.23.23.5:3001/doctores';
//     const requestOptions = {
//         method: 'GET'
//     }

//     fetch(URL, requestOptions)
//         .then((response) => {
//             const { status } = response
//             console.log({status})
//             return response.json()
//         })
//         .then((data) => {
//             console.log({data})
//             setData(data)
//             setLoading(false)
//         })
// }