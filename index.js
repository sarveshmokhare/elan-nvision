// Making Navbar responsive
const navBar = document.querySelector("nav");
const navBarCollapse = document.querySelector(".collapse");
let navBarCollapseDisplay = getComputedStyle(navBarCollapse).display;

if (navBarCollapseDisplay === "none") {
    navBar.classList.add("bg-dark");
} else {
    navBar.classList.remove("bg-dark");
}

// Scroll down button functionality
const angleDownButton = document.querySelector(".fa-angle-down");
const section2 = document.querySelector("#section2");

angleDownButton.addEventListener("click", () => {
    section2.scrollIntoView();
});

//Making stat numbers increase
const section4 = document.getElementById("section4");
let statsArray = document.getElementsByClassName("stat");

let section4Distance = section4.getBoundingClientRect().top;

for (let index = 0; index < statsArray.length; index++) {
    window.addEventListener("scroll", increaseStats)
    function increaseStats() {
        if (scrollY > section4Distance) {
            let i = 0;
            let currentStat = statsArray[index].innerHTML;
            let currentStatNumber = currentStat.replace("+", "");

            let time = 0;
            currentStatNumber <= 2000 ? time = 5 : time = 1;
            
            let interval = setInterval(() => {
                currentStatNumber <= 2000 ? i +=1 : i += 20;
                if (i > currentStatNumber) {
                    clearInterval(interval);
                } else {
                    statsArray[index].innerHTML = i + "+";
                }
            }, time);

            window.removeEventListener("scroll", increaseStats);
        }
    }
}


// clicking anywhere will close the dropdown

        t = 0
        function on_off() {
            t += 1
        }

        document.addEventListener('mouseup',function(e){
            drpdwn=document.getElementById("taskbar")
            if(!document.getElementsByTagName("nav")[0].contains(e.target) && t%2==1){
                document.getElementsByClassName("navbar-toggler")[0].click()
            }
        })


// entering of div on scrolling

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < 4; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);