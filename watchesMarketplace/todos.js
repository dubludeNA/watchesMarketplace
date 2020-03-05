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
          "<a href = 'SportPages/TrailRun.html'>"+
          "<li>"
          + r[0].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[0].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[0].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-1').innerHTML=input1;
        // Input 2
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Gravel.html'>"+
          "<li>"
          + r[1].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[1].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[1].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-2').innerHTML=input1;
        // Input 3
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Hiking.html'>"+
          "<li>"
          + r[2].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[2].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[2].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-3').innerHTML=input1;
        // Input 4
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Skydive.html'>"+
          "<li>"
          + r[3].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[3].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[3].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-4').innerHTML=input1;
        // Input 5
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Diving.html'>"+
          "<li>"
          + r[4].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[4].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[4].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-5').innerHTML=input1;
        // Input 6
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Rafting.html'>"+
          "<li>"
          + r[5].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[5].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[5].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-6').innerHTML=input1;
        // Input 7
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Paragliding.html'>"+
          "<li>"
          + r[6].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[6].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[6].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-7').innerHTML=input1;
        // Input 8
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Climbing.html'>"+
          "<li>"
          + r[7].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[7].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[7].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-8').innerHTML=input1;
        // Input 9
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Tightrope.html'>"+
          "<li>"
          + r[8].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[8].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[8].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-9').innerHTML=input1;
        // Input 10
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/MTB.html'>"+
          "<li>"
          + r[9].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[9].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[9].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-10').innerHTML=input1;
        // Input 11
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Ski.html'>"+
          "<li>"
          + r[10].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[10].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[10].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-11').innerHTML=input1;
        // Input 12
        input1 = 
        "<ul class='noBullet'>" + 
          "<a href = 'SportPages/Snowboard.html'>"+
          "<li>"
          + r[11].name +
          "</li>" +
          "<li>" +
          "<img src = '" + r[11].image + "' height='350' width='380'>" + "</img>" +
          "</li>" +
          "<li>"
          + r[11].details +
          "</li>" +
        "</ul>";
        document.querySelector('.container-12').innerHTML=input1;
        //for loop through JSON
        // rolling the function 2 times
        // window.addEventListener('DOMContentLoaded', mySearchFunction);

        var searchBtn = document.getElementById("searchButton");

        searchBtn.addEventlistener('click', mySearchFunction());

        // Search funcctionality

        function mySearchFunction() {
          console.log("test de ce");
          var input, filter, ul, li, a, i, txtValue;
          input = document.getElementById("searchInput");
          filter = input.value.toUpperCase();
          console.log(input.value)
          ul = document.getElementsByTagName("ul");
          li = ul.getElementsByTagName("li");
          // Loop through all list items and hide the ones not meeting the criteria
            for (i = 0; i < li.length; i++){
              a = li[i].getElementByTagName("a")[0];
              txtValue = a.textContent || a.innerText;
              if(txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
              }
              else{
              li[i].style.display = "none";
              }
            }
        }

}) 
// .catch(err => {
//   const errorContainer = document.createElement("div");
//   const errorTitle = document.createElement("h1");
//   const errorDescription = document.createElement("p");
//   const footer = document.getElementById("footer");
//   const parentNode = document.getElementById("main");
//   errorContainer.appendChild(errorTitle);
//   errorContainer.appendChild(errorDescription);
//   footer.parentNode.insertBefore(errorContainer, footer);
//   errorContainer.classList = "errorContainer";
//   errorTitle.classList = "errorTitle";
//   errorDescription.classList = "errorDescription";
//   errorTitle.innerHTML = "403";
//   errorDescription.innerHTML = "This is a forbidden area";
// })

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

// window.addEventListener('DOMContentLoaded', mySearchFunction);








