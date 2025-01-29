import "./style.scss";

const list = document.querySelector<HTMLUListElement>(".list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("");

if (!list || !form || !input) {
    throw new Error("Can't find either list, form or input element");
}

// form?addEventListener('submit', e =>{
//   // doesn't refresh the page
//   e.preventDefault()
//   if (input?.value == '' || input?.value == null) return

//   const task = {

//   }

//   input.value
// })
