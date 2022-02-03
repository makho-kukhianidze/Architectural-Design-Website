// Function block - Start.
// Function - for burger menu - Start. 
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// Function - for burger menu - End. 

// Function - for scroll - Start.
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 1100) {
    document.querySelector('header').style.backgroundColor = "rgb(47 99 153 / 53%)";
  }else {
    document.querySelector('header').style.backgroundColor = "#ff6f6f88";
  }
}
// Function - for scroll - End.
// Function block - End.



