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
    imageCarousel = document.getElementById("image_carousel");

    if (!culti.classList.contains("active")) {
        culti.classList.add("active");
        
        culti.style.zIndex = 1;
        imageCarousel.style.zIndex = -1;
        techy.style.zIndex = -1;
        techy.classList.remove("active");
    }
    else if (culti.classList.contains("active") && techy.classList.contains("active")) {
        culti.classList.remove("active");
        culti.style.zIndex = -1;
        
        imageCarousel.style.zIndex = 1;
    }
    else if (culti.classList.contains("active")) {
        culti.classList.remove("active");
        
        imageCarousel.style.zIndex = 1;
        
    }
}

function slide2() {

    techy = document.getElementById("techy");
    culti = document.getElementById("culti");
    imageCarousel = document.getElementById("image_carousel");

    if (!techy.classList.contains("active")) {
        techy.classList.add("active");

        techy.style.zIndex = 1;
        imageCarousel.style.zIndex = -1;
        culti.style.zIndex = -1;
        culti.classList.remove("active");
    }
    else if (techy.classList.contains("active") && culti.classList.contains("active")) {
        techy.classList.remove("active");
        techy.style.zIndex = -1;
    
        imageCarousel.style.zIndex = 1;
    }
    else if (techy.classList.contains("active")) {
        techy.classList.remove("active");
        
        imageCarousel.style.zIndex = 1;
        
    }
}
// document.getElementById("vert-navbar").style.width=document.body.clientWidth

function home() {
    techy = document.getElementById("techy")
    culti = document.getElementById("culti")
    if (techy.classList.contains("active")) techy.classList.remove("active")
    if (culti.classList.contains("active")) culti.classList.remove("active")
    document.getElementById("image_carousel").style.zIndex = 0;
}