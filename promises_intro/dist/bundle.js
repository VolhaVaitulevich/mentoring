/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst addPostForm = document.getElementById('add-post-form');\nconst addPostInput = document.getElementById('add-post-input');\nconst deletePostForm = document.getElementById('delete-post-form');\nconst deletePostInput = document.getElementById('delete-post-input');\nconst ul = document.querySelector(\"ul\");\nconst cachedPosts = [];\n\n\nconst addPost = (post) => {\n    const li = document.createElement(\"li\");\n    const { title: postTitle } = post;\n    li.innerText = postTitle;\n    ul.append(li);\n}\n\nconst findPost = (title) => {\n    return cachedPosts.find((post) => post.title === title);\n}\n\nconst getPosts = fetch(\"http://localhost:8000/posts\");\n\ngetPosts.then((response) => response.json())\n        .then((posts) => {\n            console.log('posts');\n            posts.forEach((post) => {\n                addPost(post);\n                cachedPosts.push(post);\n            })\n        })\n\naddPostForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    \n    const title = addPostInput.value;\n    const id = String(Math.random()); \n\n    if (title.trim()) {\n        //check if post with this title exists\n        if (findPost(title)) {\n            alert(`Post with title ${title} already exists!`);\n            return;\n        } \n        const newPost = { id, title };\n        fetch(\"http://localhost:8000/posts\", {\n            method: \"POST\",\n            body: JSON.stringify(newPost),\n            headers: {\n                \"Content-Type\": \"application/json\",\n            }\n        })\n        .then((response) => response.json())\n        .then((post) => {\n            addPost(post);\n            cachedPosts.push(post);\n        });\n        \n        addPostInput.value = '';\n        addPostInput.focus(); \n    } \n })       \n\n deletePostForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    const title = deletePostInput.value;\n    if (title.trim()) {\n        //find post we need to delete\n        const postToDelete = findPost(title);\n        if (postToDelete)\n        {\n            fetch(`http://localhost:8000/posts/${postToDelete.id}`, {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                }\n            })\n            .then(() => {\n                const postToDeleteIndex = cachedPosts.findIndex((post) => post.title === title);\n                cachedPosts.splice(postToDeleteIndex, 1); \n\n                //rerender posts\n                ul.innerHTML = '';\n                cachedPosts.forEach((post) => addPost(post));\n            })\n\n            deletePostInput.value = '';\n            deletePostInput.focus(); \n        } else {\n            alert(`Post with title ${title} is not found`);\n        }\n    }\n })\n\n//# sourceURL=webpack://promises_intro/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;