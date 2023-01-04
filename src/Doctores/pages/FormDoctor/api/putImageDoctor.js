
export const putImageDoctor = async(image, id)=>{
    
    let formData = new FormData();
    formData.append("image", image)

    try {
        const URL = `http://10.23.23.5:3001/doctores/${id}/foto`; 
        const requestOptions = {
            method: 'PUT',
            body: formData,
        }

        const response = await fetch( URL, requestOptions )
        .then( res => res.json() )
        .then( data => { 
            console.log(data);
        } )

    } catch(err){
        console.log(err);
    }

}