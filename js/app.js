console.log("Test")
let navbar = document.querySelector('header')
console.log(navbar)
window.addEventListener('scroll' , function(e){
    navbar.classList.toggle('sticky' , this.window.scrollY > 0)
})

let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let box1 = document.getElementById('img1box')
let box2 = document.getElementById('img2box')
let box3 = document.getElementById('img3box')
console.log(img1)
console.log(img2)
console.log(img3)
img1.addEventListener('mouseenter' , function(e){
    img1.classList.add('jsevent')
})
img1box.addEventListener('mouseleave' , function(e){
    img1.classList.remove('jsevent')
})
img2.addEventListener('mouseenter' , function(e){
    img2.classList.add('jsevent')
})
img2box.addEventListener('mouseleave' , function(e){
    img2.classList.remove('jsevent')
})
img3.addEventListener('mouseenter' , function(e){
    img3.classList.add('jsevent')
})
img3box.addEventListener('mouseleave' , function(e){
    img3.classList.remove('jsevent')
})






let menuBar = document.querySelector('.menu')
let menuClose = document.querySelector('.close')
let navLinks = document.querySelector('.navlinks')
console.log(menuBar)
console.log(menuClose)
console.log(navLinks)
menuBar.addEventListener('click' , function(e){
    navLinks.classList.add('show')
    menuBar.classList.add('d-none')
    menuClose.classList.add('d-block')
})

menuClose.addEventListener('click' , function(e){
    navLinks.classList.remove('show')
    menuBar.classList.remove('d-none')
    menuClose.classList.remove('d-block')
})