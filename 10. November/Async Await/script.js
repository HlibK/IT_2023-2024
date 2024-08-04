async function fetchUsers() {
    const result = await fetch ("https://jsonplaceholder.typicode.com/users");
    return result.json();
}

async function renderList() {
    const users = await fetchUsers();
    const ul = document.querySelector(".users-list");
        for (const user of users) {
            const li = document.createElement("li")
            li.classList.add("users-list-item");
            li.innerHTML = user.name;
            ul.appendChild(li);
        }
}


function filterUsers(e) {
    const usersListItems = document.getElementsByClassName("users-list-item");
    if (e.target.value.length === 0) {
        [...document.getElementsByClassName("hidden")].forEach((item) => {
            item.classList.remove("hidden");
        })
        return;
    }
    for (const user of usersListItems) {
       // if (!user.innerHTML.startsWith(e.target.value)) {
        if (!user.innerHTML.includes(e.target.value)) {
            user.classList.add("hidden");
        } else {
            user.classList.remove("hidden");
        }
    }
}

renderList();

document.querySelector(".input").addEventListener("keyup", filterUsers);

