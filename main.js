// addEventListener

document.addEventListener("DOMContentLoaded", () => {
  const userContainer = document.getElementById("user-container");
  async function fetchUsers() {
    try {
      const response = await fetch("https://reqres.in/api/users/");
      const json = await response.json();
      displayUsers(json.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  function displayUsers(users) {
    users.forEach((user) => {
      const userDiv = document.createElement("div");

      const userName = document.createElement("p");
      // userName.className=""
      // userName.setAttribute("id","name")
      // userName.id=""
      userName.innerHTML = `<h2>${user.first_name}</h2>`;
      userDiv.appendChild(userName);

      const userEmail = document.createElement("p");
      userEmail.innerHTML = `<strong>${user.email}</strong>`;
      userDiv.appendChild(userEmail);

      const userAvatar = document.createElement("img");
      userAvatar.src = user.avatar;
      userDiv.appendChild(userAvatar);

      userContainer.appendChild(userDiv);
    });
  }
  fetchUsers();
});

//  <div>
//   <p>
//     first_name
//   </p>
//   <p>
//      email
//   </p>
//    <img src=""/>
//   </div>
