const getPost = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const res = await fetch(url);
    const post = await res.json();

    return post;
}

export default getPost;