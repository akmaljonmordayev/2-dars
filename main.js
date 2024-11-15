// let input = document.querySelector("input");
// let errorP = document.querySelector(".error-text");
// let pAddDiv = document.querySelector(".texts");
// const editTodo = (e) => {
//   e.stopPropagation();
//   let pTag = e.target.parentElement.parentElement.querySelector(".todo-p");

//   console.log(pTag);
//   let newValue = prompt("Edit your todo:", pTag.textContent.split('(')[0].trim());
//   if (newValue !== null && newValue.trim() !== "") {
//     let date = new Date();
//     let day = date.toLocaleTimeString();
//     pTag.textContent = `${newValue} (${day})`;
//   }
// }

// function deleteTodo(e){
//   e.target.parentElement.parentElement.remove()
// }

// function todoList(event){
//   event.preventDefault()
//   if (input.value.trim("") === "") {
//     errorP.textContent = "iltimos text kiriting....😒😒🔕🔕";
//   } else {
//     let date = new Date();
//     let day = date.toLocaleTimeString();
//     errorP.textContent = "";
//     let divCreated = document.createElement("div");
//     divCreated.classList.add("i-p");
//     divCreated.innerHTML += `
//       <p class="todo-p">${input.value}<span style="margin-left:20px"> (${day})</span></p>
//       <div style="display:flex; gap:20px; align-items:center;">
//       <i  onclick="editTodo(event)" class="far fa-edit  edit"></i>
//       <i onclick="deleteTodo(event)" class="fas fa-trash delete"></i>
//       </div>
//     `
//     pAddDiv.prepend(divCreated);
//     input.value = "";
//     let pTodo = document.querySelector(".todo-p")
//     pTodo.addEventListener("click", (e) => {
//       pTodo.classList.toggle("done");
//     });
//   }
// }

let input = document.querySelector("input");
let button = document.querySelector("button");
let texts = document.querySelector(".texts");
let b = document.querySelector("b");

function deleteFun(event) {
  event.target.parentElement.parentElement.remove();
}

function editTodo(event) {
  let p = event.target.parentElement.parentElement.querySelector(".todo-p");
  let newValue = prompt("edit your todo", p.textContent);
  p.textContent = `${newValue}`;
}



function toggleDone(event){
  let p = event.target.parentElement.parentElement.querySelector(".todo-p");
  p.classList.toggle("done")
}



function todoList(e) {
  e.preventDefault();
  if (input.value.trim("") === "") {
    b.textContent = "iltimos text nimadir kirgizing😒😒";
  } else {
    let div = document.createElement("div");
    div.classList.add("i-p");
    div.innerHTML += `
        <p onclick='toggleDone(event)' class="todo-p">${input.value}</p>  
        <div style="display:flex; gap:20px; align-items:center;">
          <i onclick="editTodo(event)"  class="far fa-edit  edit"></i>
          <i onclick="deleteFun(event)" class="fas fa-trash delete"></i>
          </div>
      `;

    // let pTodo = document.querySelector(".todo-p");
    // pTodo.addEventListener("click", (e) => {
    //   pTodo.classList.toggle("done");
    // });


    texts.prepend(div);

    input.value = "";
  }
}
