fetch("http://localhost:3000/api/todos", {
    method: "GET",
    headers: {
        authorization: "Bearer " + sessionStorage.getItem("token")
    }
  })
    .then(r => r.json())
    .then(r => {
      // Input 1
      input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[0].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[0].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[0].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-1').innerHTML=input1;
        // Input 2
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[1].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[1].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[1].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-2').innerHTML=input1;
        // Input 3
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[2].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[2].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[2].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-3').innerHTML=input1;
        // Input 4
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[3].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[3].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[3].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-4').innerHTML=input1;
        // Input 5
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[4].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[4].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[4].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-5').innerHTML=input1;
        // Input 6
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[5].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[5].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[5].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-6').innerHTML=input1;
        // Input 7
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[6].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[6].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[6].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-7').innerHTML=input1;
        // Input 8
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[7].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[7].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[7].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-8').innerHTML=input1;
        // Input 9
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[8].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[8].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[8].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-9').innerHTML=input1;
        // Input 10
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[9].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[9].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[9].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-10').innerHTML=input1;
        // Input 11
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[10].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[10].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[10].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-11').innerHTML=input1;
        // Input 12
        input1 = 
        "<ul class='noBullet'>" + 
          "<li>"
          + r[11].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[11].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[11].price +
          "</li>" +
        "</ul>";
        document.querySelector('.container-12').innerHTML=input1;       
})
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


  //   .catch(error => console.log("my error", error));
  // const token = localStorage.getItem("token");
  // .then (todos =>)}