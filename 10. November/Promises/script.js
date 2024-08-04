function getPostsById(id){
    const result = {
        id,
        name: '',
        posts: []
    }

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => {
        const foundUser = users.find(user => user.id === id)
        result.name = foundUser.name;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data = data.json())
        .then(posts => {
            result.posts  = posts.filter(post => post.userId === id)
            resolve(result)
        })
    })
    //return result;
}

console.log(getPostsById(7).then(data => console.log(data)))

