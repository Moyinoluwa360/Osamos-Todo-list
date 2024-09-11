let myDay = {
    name: "notes"
}
export default function notesPage(){
    function renderComponent(element){
        const todosDisplayed = document.querySelector("#todos-displayed")
        todosDisplayed.querySelectorAll('*').forEach(element => element.remove());
        todosDisplayed.appendChild(element)
      }
    renderComponent(component(myDay))
}