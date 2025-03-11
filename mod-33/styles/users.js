const handleUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loadUser(data));
};
const loadUser = (users) => {
  console.log(...users);
  const usersList = document.getElementById("users-list");

  for (let user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    usersList.appendChild(li);
  }
};
