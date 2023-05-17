let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");
window.onscroll=()=>{
    sections.forEach((sec,i) =>{
        let top =window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id")
        if(top>=offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector(`header nav a:nth-child(${i+1}`).classList.add('active')
            })
        }
        // console.log(top+"+"+offset+"+"+eval(offset+height),"+",height);
    })
}
// >>>>>>>>>>>>>>>>>>>>Sticky navbar <<<<<<<<<<<<<<<<<<<<<<<<<<<
let header=document.querySelector("header");
header.classList.toggle("sticky",window.scrollY > 100);

// Navbar and menutn
let menutn=document.querySelector(".img");
let navbar=document.querySelector(".navbar");

menutn.addEventListener("click",()=>{
    navbar.classList.toggle("navbar-display-block")
})

// document.querySelector(".footer").addEventListener("click",()=>{
//     window.scrollTo(0,0)
// })