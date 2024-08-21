import "./style.css"
const makeCollasible = (function(){
    const specialBar = document.querySelectorAll(".special-bar")
    for ( let i = 0; i < specialBar.length; i++) {
        specialBar[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
      } 
})()

