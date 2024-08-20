import addImg from "../icons/add.svg"
import editImg from "../icons/edit.svg"
import deleteImg from "../icons/trash.svg"
import createTodoObj from "../lowLevelComponents/todos"
import * as ls from "../localStorage"
import * as detailsBox from "../external functions/createDialogueBoxFunctions"

export default function createTodoComponent(){
    const todosDiv = document.createElement("div")
    todosDiv.classList.add("todos-div")
    //
    const addItemDiv = document.createElement("div")
    addItemDiv.classList.add('addItemDiv')
    const addItemImg = document.createElement("img")
    addItemImg.setAttribute("src", addImg)
    //
    // event listener for the the image
    addItemImg.addEventListener("click",()=>{
        detailsBox.createDialog(handleDataSubmition)
    })
    const addItemText = document.createElement("span")
    addItemText.textContent = "Add Item"
    addItemDiv.appendChild(addItemImg,addItemText)
    addItemDiv.appendChild(addItemText)
    //
    todosDiv.appendChild(addItemDiv)
    // 
    const lsMyDays = ls.getLocalStorage("myDay")
    if (lsMyDays){
        console.log(lsMyDays)
        Object.values(lsMyDays).forEach(obj =>{
        console.log(obj)
        todosDiv.appendChild(createItems(obj.title))
    })
    }
    //
    return todosDiv
}

let myDay = {}
function createItems(title){
    const itemsDiv = document.createElement("div")
    itemsDiv.classList.add("items-div")
    //
    const itemTitle = document.createElement("span")
    itemTitle.textContent = title
    const itemPropsDiv = document.createElement("div")
    itemPropsDiv.classList.add("itemsPropsDiv")
    // itemspropsDiv properties
    // details button
    const itemPropsBotton = document.createElement("button")
    itemPropsBotton.classList.add("item-props-button")
    itemPropsBotton.textContent = "Details"
    // add event listener to details button
    itemPropsBotton.addEventListener("click",()=>{
        const detailsObj = ls.getLocalStorage("myDay")[title]
        detailsBox.createDetailsBox(
            detailsObj.title,
            detailsObj.description,
            detailsObj.dueDate,
            detailsObj.priority,
            detailsObj.important
          );
    })
    itemPropsDiv.appendChild(itemPropsBotton)
    // edit icon
    const itemPropsEditIcon = document.createElement("img")
    itemPropsEditIcon.setAttribute("src",editImg)
    itemPropsDiv.appendChild(itemPropsEditIcon)
    // delete icon
    const itemPropsDeleteIcon = document.createElement("img")
    itemPropsDeleteIcon.setAttribute("src", deleteImg)
    itemPropsDiv.appendChild(itemPropsDeleteIcon)


    // check box
    const checkBox = document.createElement("input")
    checkBox.classList.add("item-checkbox")
    checkBox.type = "checkbox"
    // event for check box
    checkBox.addEventListener("click",()=>{
        if (checkBox.checked){
            itemTitle.style.textDecoration = "line-through"
        }else{
            itemTitle.style.textDecoration = "none"
        }
    })
    //
    itemsDiv.appendChild(checkBox)
    itemsDiv.appendChild(itemTitle)
    itemsDiv.appendChild(itemPropsDiv)
    return itemsDiv
}

const handleDataSubmition = function handleDataSubmition(title,description,dueDate,priority,favourite){
    if (Object.keys(myDay).length == 0){
        myDay = {...ls.getLocalStorage("myDay")}
        console.log(myDay)
    }
    const todoObj = new createTodoObj(title,description,dueDate,priority,favourite)
    myDay[title] = todoObj
    let lsMyDay = ls.populateLocalStorage("myDay", myDay)
    document.querySelector(".todos-div").appendChild(createItems(lsMyDay[title].title))
}

