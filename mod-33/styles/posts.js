const handlePosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => allPosts(data));
  const readButton = document.getElementById("read-button");
  readButton.disabled = true;
};

const allPosts = (posts) => {
  console.log(...posts);

  const postDiv = document.getElementById("post-div");

  for (let post of posts) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>

    `;
    postDiv.appendChild(div);
  }
};
