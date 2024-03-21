// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var inputValue = input.value.trim();
  
    if (inputValue === "") {
      alert("Please enter a task!");
      return;
    }
  
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = inputValue;
  
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      ul.removeChild(li);
    });
  
    li.appendChild(checkbox);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  
    input.value = "";
  }
  