import addImg from "../icons/add.svg"
import editImg from "./icons/edit.svg"
import trashImg from "./icons/trash.svg"

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
        createDialog()
    })
    const addItemText = document.createElement("span")
    addItemText.textContent = "Add Item"
    addItemDiv.appendChild(addItemImg,addItemText)
    addItemDiv.appendChild(addItemText)
    //
    todosDiv.appendChild(addItemDiv)
    return todosDiv
}

    

function createItems(title){
    const itemsDiv = document.createElement("div")
    itemsDiv.classList.add("items-div")
    // check box
    const checkBox = document.createElement("input")
    checkBox.type = "check"
    
    const itemTitle = document.createElement("span")
    itemTitle.textContent = title
    const itemPropsDiv = document.createElement("div")
    itemPropsDiv.classList.add("itemsPropsDiv")
    itemPropsDiv.textContent = "fdfghjk;l"
    //
    itemsDiv.appendChild(itemTitle)
    itemsDiv.appendChild(itemPropsDiv)
    return itemsDiv
}

function createDialog() {
    // Create the modal overlay
    const modal = document.createElement('div');
    modal.className = 'modal';

    // Create the modal content container
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create and append the header
    const header = document.createElement('h2');
    header.textContent = 'Item Details';
    modalContent.appendChild(header);

    // Create the form element
    const form = document.createElement('form');

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    form.appendChild(titleInput);

    form.appendChild(document.createElement('br'));

    // Description input
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.name = 'description';
    form.appendChild(descInput);

    form.appendChild(document.createElement('br'));

    // Due Date input
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    form.appendChild(dueDateLabel);

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    form.appendChild(dueDateInput);

    form.appendChild(document.createElement('br'));

    // Priority input (radio buttons)
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    form.appendChild(priorityLabel);

    const priorities = ['Low', 'Normal', 'High'];
    priorities.forEach(priority => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'priority';
        radio.value = priority.toLowerCase();
        form.appendChild(radio);

        const radioLabel = document.createElement('label');
        radioLabel.textContent = priority;
        form.appendChild(radioLabel);
    });

    form.appendChild(document.createElement('br'));

    // Favourite input (radio buttons)
    const favLabel = document.createElement('label');
    favLabel.textContent = 'Favourite:';
    form.appendChild(favLabel);

    const favourites = ['True', 'False'];
    favourites.forEach(fav => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'favourite';
        radio.value = fav.toLowerCase();
        form.appendChild(radio);

        const favRadioLabel = document.createElement('label');
        favRadioLabel.textContent = fav;
        form.appendChild(favRadioLabel);
    });

    form.appendChild(document.createElement('br'));

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit Item';
    form.appendChild(submitButton);

    // Append the form to the modal content
    modalContent.appendChild(form);

    // Append the modal content to the modal
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Display the modal when the page loads
    modal.style.display = 'block';

    // Close the modal on form submit (you can also add form submission logic here)
    form.onsubmit = function (e) {
        e.preventDefault(); // Prevent the form from submitting
        modal.style.display = 'none'; // Close the modal
        console.log('Form Submitted:', {
            title: titleInput.value,
            description: descInput.value,
            dueDate: dueDateInput.value,
            priority: form.priority.value,
            favourite: form.favourite.value
        });
    };
}
