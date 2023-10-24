active = document.getElementsByClassName("home")[0];
active.classList.add("active")
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash === "#workshop") {
        slide('workshop'); // Call the slide1 function when the workshop section is loaded
    }
});
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

    if(!culti.classList.contains("active") && techy.classList.contains("active")){
        techy.classList.remove("active")
        techy.classList.add("inactive")
        culti.classList.remove("inactive")
        culti.classList.add("active")
        culti.style.zIndex=1
        setTimeout(
            function remove(){
                techy.classList.remove("inactive")
            },2000
        )
        
    }

    else if (!culti.classList.contains("active")) {
        culti.classList.remove("inactive");
        culti.classList.add("active");
        
        culti.style.zIndex = 1;
        imageCarousel.style.zIndex = 0;
        techy.style.zIndex = -1;
        techy.classList.remove("active");
    }
    // else if (culti.classList.contains("active") && techy.classList.contains("active")) {
    //     culti.classList.remove("active");
    //     culti.classList.add("inactive")
    //     setTimeout(
    //         function remove(){
    //             culti.classList.remove("inactive")
    //         },2000
    //     )
    //     culti.style.zIndex = -1;
        
    //     imageCarousel.style.zIndex = 1;
    // }
    else if (culti.classList.contains("active")) {
        culti.classList.add("inactive");
        culti.classList.remove("active");
        setTimeout(
            function remove(){
                culti.classList.remove("inactive")
            },2000
        )
        imageCarousel.style.zIndex = 0;
        
    }
}

function slide2() {

    techy = document.getElementById("techy");
    culti = document.getElementById("culti");
    imageCarousel = document.getElementById("image_carousel");
    if(!techy.classList.contains("active") && culti.classList.contains("active")){
        culti.classList.remove("active")
        culti.classList.add("inactive")
        techy.classList.remove("inactive")
        techy.classList.add("active")
        techy.style.zIndex=1
        setTimeout(
            function remove(){
                culti.classList.remove("inactive")
            },2000
        )
        
    }
    else if (!techy.classList.contains("active")) {
        techy.classList.remove("inactive")
        techy.classList.add("active");

        techy.style.zIndex = 1;
        imageCarousel.style.zIndex = 0;
        culti.style.zIndex = -1;
        culti.classList.remove("active");
    }
    // else if (techy.classList.contains("active") && culti.classList.contains("active")) {
    //     techy.classList.remove("active");
    //     techy.classList.add("inactive")
    //     setTimeout(
    //         function remove(){
    //             techy.classList.remove("inactive")
    //         },2000
    //     )
    //     techy.style.zIndex = -1;
    
    //     imageCarousel.style.zIndex = 1;
    // }
    else if (techy.classList.contains("active")) {
        techy.classList.remove("active");
        techy.classList.add("inactive")
        setTimeout(
            function remove(){
                techy.classList.remove("inactive")
            },2000
        )
        
        imageCarousel.style.zIndex = 0;
        
    }
}
// document.getElementById("vert-navbar").style.width=document.body.clientWidth

function home() {
    // slide1()
    // slide2()
    techy = document.getElementById("techy")
    culti = document.getElementById("culti")
    if (techy.classList.contains("active")) {
        techy.classList.remove("active")
        techy.classList.add("inactive")
        setTimeout(
            function remove(){
                techy.classList.remove("inactive")
            },2000
        )
    }
    if (culti.classList.contains("active")){ 
        culti.classList.remove("active")
        culti.classList.add("inactive")
        setTimeout(
            function remove(){
                culti.classList.remove("inactive")
            },2000
        )
    }
    document.getElementById("image_carousel").style.zIndex = 0;
}