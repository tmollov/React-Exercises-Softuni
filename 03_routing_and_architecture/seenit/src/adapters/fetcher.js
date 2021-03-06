const BASE_URL = 'http://localhost:3004';

const endpoints = {
    login: "/login",
    register: "/register",
    posts: "/posts",
    comments: "/comments",
    my_posts: function (author) {
        return `${this.posts}?author=${author}`;
    },
    post: function (id) {
        return `${this.posts}/${id}`
    },
    edit_post: function (id) {
        return `${this.posts}/edit/${id}`
    },
    delete_post: function (id) {
        return this.post(id);
    },
    comments_for_post: function (post_id) {
        return `${this.comments}?post_id=${post_id}`;
    },
    comment: function (id) {
        return `${this.comments}/${id}`
    }
}

const m = {
    post: "POST",
    put: "PUT",
    delete: "DELETE"
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
            method: m.post,
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
    },

    put: (endpoint, data, callback) => {
        let request = {
            method: m.put,
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
    },
    delete: (endpoint, callback) => {
        let request = {
            method: m.delete,
            //mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return fetch(BASE_URL + endpoint, request, callback)
            .then(data => data.json())
            .then(callback)
            .catch((err) => {
                return err
            });
    },
}

export {fetcher, endpoints};