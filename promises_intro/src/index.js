
const addPostForm = document.getElementById('add-post-form');
const addPostInput = document.getElementById('add-post-input');
const deletePostForm = document.getElementById('delete-post-form');
const deletePostInput = document.getElementById('delete-post-input');
const ul = document.querySelector("ul");
const cachedPosts = [];


const addPost = (post) => {
    const li = document.createElement("li");
    const { title: postTitle } = post;
    li.innerText = postTitle;
    ul.append(li);
}

const findPost = (title) => {
    return cachedPosts.find((post) => post.title === title);
}

const getPosts = fetch("http://localhost:8000/posts");

getPosts.then((response) => response.json())
        .then((posts) => {
            console.log('posts');
            posts.forEach((post) => {
                addPost(post);
                cachedPosts.push(post);
            })
        })

addPostForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const title = addPostInput.value;
    const id = String(Math.random()); 

    if (title.trim()) {
        //check if post with this title exists
        if (findPost(title)) {
            alert(`Post with title ${title} already exists!`);
            return;
        } 
        const newPost = { id, title };
        fetch("http://localhost:8000/posts", {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((post) => {
            addPost(post);
            cachedPosts.push(post);
        });
        
        addPostInput.value = '';
        addPostInput.focus(); 
    } 
 })       

 deletePostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = deletePostInput.value;
    if (title.trim()) {
        //find post we need to delete
        const postToDelete = findPost(title);
        if (postToDelete)
        {
            fetch(`http://localhost:8000/posts/${postToDelete.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(() => {
                const postToDeleteIndex = cachedPosts.findIndex((post) => post.title === title);
                cachedPosts.splice(postToDeleteIndex, 1); 

                //rerender posts
                ul.innerHTML = '';
                cachedPosts.forEach((post) => addPost(post));
            })

            deletePostInput.value = '';
            deletePostInput.focus(); 
        } else {
            alert(`Post with title ${title} is not found`);
        }
    }
 })