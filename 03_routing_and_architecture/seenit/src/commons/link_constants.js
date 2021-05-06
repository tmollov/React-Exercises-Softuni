const links = {
    home: '/',
    my_posts: '/myposts',
    submit: "/submit",
    post: '/posts/:id',
    to_post: (id) => {
        return `/posts/${id}`;
    }
}

export default links;