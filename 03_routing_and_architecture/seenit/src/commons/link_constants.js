const links = {
    home: '/',
    my_posts: '/myposts',
    submit: '/submit',
    post_detail: '/posts/:id',
    edit_post: '/posts/edit/:id',
    to_post: (id) => {
        return `/posts/${id}`;
    },
    to_edit_post: (id) => {
        return `/posts/edit/${id}`
    }
}

export default links;