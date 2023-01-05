
export const postAuth = async ( email, password, setStatus ) => {
    const data = {};
    const _datos={
        email: email,
        password: password
    }

    const URL = 'http://10.23.23.5:3001/signin';
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json"}
    }

    const response = await fetch(URL, requestOptions)
    .then( res => res.json() )
    .then( token => { 
        console.log('token', token);
        return token;
    } )

    return response;


    // if(status === 200){
    //     console.log('entra');
    //     navigate('/formulario',{
    //         replace: true
    //     });
    //   } else{
    //     alert('no registrado');
    //   }

}