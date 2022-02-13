let section=document.querySelector(".resume-area")
let container=document.querySelector(".skills-container")
console.log(container);
// scrolling active stuff
window.onscroll= function(){
    
    if ((window.scrollY >= section.offsetTop -400)){
        container.style.display="block"
    }
    else{
        container.style.display="none"
    }
}