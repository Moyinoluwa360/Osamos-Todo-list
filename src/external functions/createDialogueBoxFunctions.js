export function createDetailsBox(title, description, dueDate, priority, favourite) {
    // Create the overlay element
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
  
    // Create the details box container
    const detailsBox = document.createElement("div");
    detailsBox.className = "details-box";
    document.body.appendChild(detailsBox);
  
    // Create the title element
    const titleElement = document.createElement("h2");
    titleElement.classList.add("titleElement")
    titleElement.textContent = title;

    detailsBox.appendChild(titleElement);
  
    // Create the description element
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    descriptionElement.classList.add("descriptionElement")
    detailsBox.appendChild(descriptionElement);
  
    // Create the due date element
    const dueDateElement = document.createElement("p");
    dueDateElement.textContent = `Due Date: ${dueDate}`;
    dueDateElement.classList.add("dueDateElement")
    detailsBox.appendChild(dueDateElement);
  
    // Create the priority element
    const priorityElement = document.createElement("p");
    priorityElement.textContent = `Priority: ${priority}`;
    priorityElement.classList.add("priorityElement")
    detailsBox.appendChild(priorityElement);
  
    // Create the favourite element
    const favouriteElement = document.createElement("p");
    favouriteElement.textContent = `Favourite: ${favourite ? "Yes" : "No"}`;
    favouriteElement.classList.add("favouriteElement")
    detailsBox.appendChild(favouriteElement);
  
    // Add a close button to the details box
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.onclick = () => {
      detailsBox.remove();
      overlay.remove();
    };
    detailsBox.appendChild(closeButton);
  
    // Center the details box vertically and horizontally
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const detailsBoxHeight = detailsBox.offsetHeight;
    const detailsBoxWidth = detailsBox.offsetWidth;
    detailsBox.style.top = `${(windowHeight - detailsBoxHeight) / 2}px`;
    detailsBox.style.left = `${(windowWidth - detailsBoxWidth) / 2}px`;
  }

export function createDialog(handleDataSubmition,pageObj) {
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
      const title = titleInput.value
      const description =descInput.value
      const dueDate = dueDateInput.value
      const priority = form.priority.value
      const favourite =  form.favourite.value
      handleDataSubmition(pageObj,title,description,dueDate,priority,favourite)
  };
}

export function createProjectTitleDialog(handleSubmit) {
  // Create the modal overlay
  const modal = document.createElement('div');
  modal.className = 'modal';

  // Create the modal content container
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Create and append the header
  const header = document.createElement('h2');
  header.textContent = 'Enter Project Name';
  modalContent.appendChild(header);

  // Create the form element
  const form = document.createElement('form');

  // Title input
  const projectNameLabel = document.createElement('label');
  projectNameLabel.textContent = 'Project Name';
  form.appendChild(projectNameLabel);

  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.name = 'title';
  form.appendChild(projectNameInput);

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
  
  // create an object for the project

  // Close the modal on form submit (you can also add form submission logic here)
  const projectObj = {}
  form.onsubmit = function (e) {
    e.preventDefault(); // Prevent the form from submitting
    modal.style.display = 'none'; // Close the modal
    projectObj["name"] = projectNameInput.value
    handleSubmit(projectObj)
  };
}

//

export function editItemDialog(handleEditDataSubmition,itemsDivTitle,itemTitle,itemDueDate) {
  // Create the modal overlay
  const modal = document.createElement('div');
  modal.className = 'modal';

  // Create the modal content container
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Create and append the header
  const header = document.createElement('h2');
  header.textContent = 'Edit Details';
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
      const title = titleInput.value
      const description =descInput.value
      const dueDate = dueDateInput.value
      const priority = form.priority.value
      const favourite =  form.favourite.value
      console.log("madd oo")
      handleEditDataSubmition(itemsDivTitle,title,description,dueDate,priority,favourite,itemTitle,itemDueDate)
  };
}