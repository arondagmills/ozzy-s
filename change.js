const paragraph = document.createElement("p")

paragraph.textContent =  "A brand new paragraph"
paragraph.innerHTML = "i am a paragraph with <strong>bold text </strong>."

console.log(paragraph);

const toDolist = document.querySelector("ul")
const newToDo = document.createElement("li")

newToDo.textContent = "Do homework"
toDolist.appendChild(newToDo)

anotherToDo = document.createElement("li")
anotherToDo.textContent = "pay pills"
toDolist.insertBefore(anotherToDo, toDolist.firstElementChild);

const modifyToDo = document.createElement("li")

modifyToDo.textContent = "feed the dog"
toDolist.replaceChild(modifyToDo, toDolist.children [2])

toDolist.removeChild(toDolist.lastElementChild)

