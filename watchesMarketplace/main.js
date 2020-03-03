
var buton = document.getElementById("submit");

buton.addEventListener("click", clickBtn);

function clickBtn(e) {
  e.preventDefault();
  var user = document.getElementById("userName");
  var userValue = user.value;
  console.log(userValue);
  var pass = document.getElementById("password");
  var password = pass.value;
  console.log(password);

  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      user: userValue,
      pass: password
    })
  })
    .then(r => r.json())
    .then(response => {
      sessionStorage.setItem("token", response.token);
      window.location.assign("todos.html");
    })
    .catch(error => console.log("my error: ", error));
    const token = localStorage.getItem("token");
    console.log(token);
}

// fetch("http://localhost:3000/api/auth/login", {
//     method: "POST",
//     body: JSON.stringify(body)
//   })
//     .then(response => response.json())
//     .then(function tokenFunction(response) {
//       sessionStorage.setItem("token", response.token);
//       window.location.assign("nav_bar.html");
//     })
//     .catch(error => console.log("Error", error));
// }