const BASE_URL = 'http://localhost:3004';

const fetcher = {
    endpoints: {
        login: "/login",
    },
    get: (endpoint, callback) =>
        fetch(BASE_URL + endpoint)
            .then(data => data.json())
            .then(callback)
            .catch(console.log),

    post: (endpoint, data, callback) => {
        let request = {
            method: 'POST',
            //mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }
        return fetch(BASE_URL + endpoint, request,callback)
            .then(data => data.json())
            .then(callback)
            .catch(console.log);
    }
}

export default fetcher;