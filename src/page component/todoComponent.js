import addImg from "../icons/add.svg"
import editImg from "../icons/edit.svg"
import deleteImg from "../icons/trash.svg"
import createTodoObj from "../lowLevelComponents/todos"
import * as ls from "../localStorage"
import * as detailsBox from "../external functions/createDialogueBoxFunctions"
import {mapKeys} from "lodash"

export default function createTodoComponent(pageObj){
    lsKeyName = pageObj.name
    console.log(lsKeyName)
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
        detailsBox.createDialog(handleDataSubmition,pageObj)
    })
    const addItemText = document.createElement("span")
    addItemText.textContent = "Add Item"
    addItemDiv.appendChild(addItemImg,addItemText)
    addItemDiv.appendChild(addItemText)
    //
    todosDiv.appendChild(addItemDiv)
    // 
    const lsPageObj = ls.getLocalStorage(pageObj.name)
    if (lsPageObj){
        Object.values(lsPageObj).forEach(obj =>{
            if (obj instanceof Object){
                todosDiv.appendChild(createItems(pageObj,obj.title))
            }       
    })
    }
    //
    return todosDiv
}
let lsKeyName = ""
let lsPairTitle = ""

function createItems(pageObj,title){
    const itemsDiv = document.createElement("div")
    itemsDiv.classList.add("items-div")
    let itemsDivTitle = title
    if (itemsDivTitle.includes(" ")){
        itemsDivTitle = itemsDivTitle.split(" ").join("")
    } 
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
        let detailsObj;
        detailsObj = ls.getLocalStorage(pageObj.name)[title]
        if(detailsObj == null){
            detailsObj = ls.getLocalStorage(lsKeyName)[lsPairTitle]
        }
        detailsBox.createDetailsBox(
            detailsObj.title,
            detailsObj.description,
            detailsObj.dueDate,
            detailsObj.priority,
            detailsObj.important
          );
    })
    itemPropsDiv.appendChild(itemPropsBotton)
    //due date
    const itemDueDate = document.createElement("span")
    itemDueDate.textContent = ls.getLocalStorage(pageObj.name)[title].dueDate
    itemPropsDiv.appendChild(itemDueDate)
    // edit icon
    const itemPropsEditIcon = document.createElement("img")
    itemPropsEditIcon.setAttribute("src",editImg)
    //add event listener for editImg
    itemPropsEditIcon.addEventListener("click",()=>{
        detailsBox.editItemDialog(handleEditDataSubmition,itemsDivTitle,itemTitle,itemDueDate)
    })
    itemPropsDiv.appendChild(itemPropsEditIcon)
    // delete icon
    const itemPropsDeleteIcon = document.createElement("img")
    itemPropsDeleteIcon.setAttribute("src", deleteImg)
    // add event listener to delete img
    console.log(pageObj)
    itemPropsDeleteIcon.addEventListener("click",()=>{
        let lsPageObj = ls.getLocalStorage(pageObj.name)
        console.log(lsPageObj)
        delete lsPageObj[title]
        console.log(lsPageObj)
        ls.populateLocalStorage(pageObj.name,lsPageObj)
        document.querySelector(".todos-div").removeChild(itemsDiv)
    })
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

const handleDataSubmition = function handleDataSubmition(pageObj,title,description,dueDate,priority,favourite){
    const todoObj = new createTodoObj(title,description,dueDate,priority,favourite)
    if (Object.keys(pageObj).length == 1){
        pageObj = {...pageObj,...ls.getLocalStorage(pageObj.name)}
    }
    pageObj[todoObj.title] = todoObj
    let lsPageObj = ls.populateLocalStorage(pageObj.name, pageObj)
    document.querySelector(".todos-div").appendChild(createItems(pageObj,lsPageObj[todoObj.title].title))
}

const handleEditDataSubmition = function (itemsDivTitle,title,description,dueDate,priority,favourite,itemTitle,itemDueDate){
    const todoObj = new createTodoObj(title,description,dueDate,priority,favourite)
    const lsItemDetailsObj = ls.getLocalStorage(lsKeyName)
    lsItemDetailsObj[itemsDivTitle] = todoObj
    const newLsItemDetailsObj = mapKeys(lsItemDetailsObj, (value, key) => {
        if (key === itemsDivTitle) {
          return title;
        }
        return key; // return the original key name for all other keys
      });
    ls.populateLocalStorage(lsKeyName, newLsItemDetailsObj)
    lsPairTitle = title
    // editing item div
    itemTitle.textContent = title
    itemDueDate.textContent = dueDate
}
