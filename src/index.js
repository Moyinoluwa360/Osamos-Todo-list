import todayPage from "./page component/todayPage"
import "./page component/projects"
const todayDiv = document.querySelector("#myDay")
todayDiv.addEventListener("click",()=>{
  todayPage()
})