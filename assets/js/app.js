// Getting burger and navlink class and putting them in a function
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');

//Selecting all navlinks in html (li)
    const navLink =document.querySelectorAll('.navLinks li');

//We want to run a function when burger is clicked
    
burger.addEventListener('click',()=>{
    //Toggle Nav    
    nav.classList.toggle('navActive');
    //Animate Links
    navLink.forEach((link,index) => {
           if(link.style.animation){
                link.style.animation = ''
           }else {
               link.style.animation = `navLinkFade 0.5s ease forwards  ${index/7 + 0.3}s`
           }
       });
    //Burger Animation
    burger.classList.toggle('toggle') 
    })
}
//invoke function to run the navSlide
navSlide();