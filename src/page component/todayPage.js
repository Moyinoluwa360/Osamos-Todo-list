
import component from "./todoComponent"
let myDay = {
    name: "today"
}
export default function todayPage(){
    function renderComponent(element){
        const todosDisplayed = document.querySelector("#todos-displayed")
        todosDisplayed.querySelectorAll('*').forEach(element => element.remove());
        todosDisplayed.appendChild(element)
      }
    renderComponent(component(myDay))
}
