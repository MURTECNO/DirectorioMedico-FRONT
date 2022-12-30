
export const postAuth = ( email, password ) => {
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

}