import * as dialogue from "../external functions/createDialogueBoxFunctions"
import * as ls from "../localStorage"
import component from "./todoComponent"
const eventsProjectDiv = (function(){
    let projectObjs = {}
    let projectObjName =""

    //check if objects exists in projectObjs
    const lsProjectObjs = ls.getLocalStorage("projects")
    if (lsProjectObjs){
        Object.values(lsProjectObjs).forEach(obj =>{
            if (obj instanceof Object){
                createProjectDiv(obj)
            }       
    })
    }
    //
    const createProjectIconBtn = document.querySelector(".project-addImg")
    function handleSubmit(projectObj){
        projectObjName = projectObj.name
        if (Object.keys(projectObjs).length == 0){
            projectObjs = {...ls.getLocalStorage("projects")}
            console.log(projectObjs)
        }
        projectObjs[projectObjName] = projectObj
        const lsprojectObjs = ls.populateLocalStorage("projects",projectObjs)
        createProjectDiv(lsprojectObjs[projectObjName])
    }
    createProjectIconBtn.addEventListener("click",()=>{
        dialogue.createProjectTitleDialog(handleSubmit)
    })
})()

function createProjectDiv(projectObj){
    const hiddenContentProject = document.querySelector(".hiddenContentProject")
    //
    const projectDiv = document.createElement("div")
    projectDiv.classList.add("hiddenContentBar")

    // add event listener for project div in other to display page
    projectDiv.addEventListener("click",()=>{
        function renderComponent(element){
            const todosDisplayed = document.querySelector("#todos-displayed")
            todosDisplayed.querySelectorAll('*').forEach(element => element.remove());
            todosDisplayed.appendChild(element)
          }
        renderComponent(component(projectObj))
    })
    //
    projectDiv.textContent = projectObj.name.toUpperCase()
    //
    hiddenContentProject.appendChild(projectDiv)
}