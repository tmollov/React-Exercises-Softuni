const BASE_URL = 'http://localhost:3004';

const endpoints = {
    login: "/login",
    register: "/register",
    posts: "/posts",
    post: function (id) {
        return `${this.posts}/${id}`
    },
    edit_post: function (id) {
        return `${this.posts}/edit/${id}`
    }
}

const fetcher = {
    get: (endpoint, callback) =>
        fetch(BASE_URL + endpoint)
            .then(data => data.json())
            .then(callback)
            .catch((err) => {
                console.log(err)
            }),

    post: (endpoint, data, callback) => {
        let request = {
            method: 'POST',
            //mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }
        return fetch(BASE_URL + endpoint, request, callback)
            .then(data => data.json())
            .then(callback)
            .catch((err) => {
                return err
            });
    }
}

export {fetcher, endpoints};