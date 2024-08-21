
import component from "./todoComponent"
let myDay = {
    name: "today"
}
export default function todayPage(){
    function renderComponent(element){
        document.querySelector("#todos-displayed").appendChild(element)
      }
    renderComponent(component(myDay))
}