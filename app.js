var list = document.getElementById("ul");

function add() {
  var input = document.getElementById("input");
  if (input.value) {
    var liElement = document.createElement("li");
    var textNode = document.createTextNode(input.value);
    liElement.appendChild(textNode);
    list.appendChild(liElement);

    // Edit Button
    var editButton = document.createElement("button");
    editButton.setAttribute("class", "button new green");
    editButton.setAttribute("onclick", "edit(this)");
    var textEditButtong = document.createTextNode(`Edit`);
    editButton.appendChild(textEditButtong);
    liElement.appendChild(editButton);

    // delete Button
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "button new red");
    deleteButton.setAttribute("onclick", "deleteOne(this)");
    var textDeleteButtong = document.createTextNode(`Delete`);
    deleteButton.appendChild(textDeleteButtong);
    liElement.appendChild(deleteButton);
  } else {
    alert("Error");
  }
  input.value = "";
}
function deleteOne(e) {
  e.parentNode.remove();
}
function edit(e) {
  var textUpdate = prompt();
  if (textUpdate) {
    e.parentNode.firstChild.textContent = textUpdate;
  } else {
    alert("Error");
  }
}
function del() {
  list.innerHTML = "";
}
