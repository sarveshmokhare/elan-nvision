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
