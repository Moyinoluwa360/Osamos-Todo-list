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
    titleElement.textContent = title;
    detailsBox.appendChild(titleElement);
  
    // Create the description element
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    detailsBox.appendChild(descriptionElement);
  
    // Create the due date element
    const dueDateElement = document.createElement("p");
    dueDateElement.textContent = `Due Date: ${dueDate}`;
    detailsBox.appendChild(dueDateElement);
  
    // Create the priority element
    const priorityElement = document.createElement("p");
    priorityElement.textContent = `Priority: ${priority}`;
    detailsBox.appendChild(priorityElement);
  
    // Create the favourite element
    const favouriteElement = document.createElement("p");
    favouriteElement.textContent = `Favourite: ${favourite ? "Yes" : "No"}`;
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