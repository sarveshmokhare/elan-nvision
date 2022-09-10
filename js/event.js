active = document.getElementsByClassName("home")[0];
active.classList.add("active")
function slide(page) {
    preactive = active
    preactive.classList.remove("active")
    active = document.getElementsByClassName(page)[0]
    active.classList.add("active")
}

let t = 0
var m = 0

function slide1() {
    culti = document.getElementById("culti")
    techy = document.getElementById("techy")
    if (!techy.classList.contains("active")) {
        if (!culti.classList.contains("active")) {
            culti.classList.add("active")
            document.getElementById("techy_btn").style.zIndex = -1
            document.getElementById("main_page").classList.add("inactive")
            document.getElementById("image_carousel").style.zIndex = -1;
            document.getElementById("culti_btn").classList.add("active")
        }
        else {
            culti.classList.remove("active")
            document.getElementById("techy_btn").style.zIndex = 10
            document.getElementById("main_page").classList.remove("inactive")
            document.getElementById("image_carousel").style.zIndex = 0;
            document.getElementById("culti_btn").classList.remove("active")
        }
    }
}

function slide2() {
    
    techy = document.getElementById("techy")
    culti = document.getElementById("culti")
    if (!culti.classList.contains("active")) {
        if (!techy.classList.contains("active")) {
            techy.classList.add("active")
            document.getElementById("culti_btn").style.zIndex = -1
            document.getElementById("main_page").classList.add("inactive")
            document.getElementById("image_carousel").style.zIndex = -1;
        }
        else {
            techy.classList.remove("active")
            document.getElementById("culti_btn").style.zIndex = 10
            document.getElementById("main_page").classList.remove("inactive")
            document.getElementById("image_carousel").style.zIndex = 0;
        }
    }
}
// document.getElementById("vert-navbar").style.width=document.body.clientWidth