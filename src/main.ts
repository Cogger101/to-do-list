import "./style.scss";

const list = document.querySelector<HTMLUListElement>(".list");
const input = document.querySelector<HTMLInputElement>(".new-task__input");
const submitBtn = document.querySelector<HTMLButtonElement>(".new-task__btn");

if (!list || !input || !submitBtn) {
    throw new Error("Can't find either list, input and btn element");
}

const addingTask = () => {
    if (input.value === "") {
        alert("You cannot add an empty task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add("list__task");
        list.appendChild(li);
        input.value = "";
        let crossIcon = document.createElement("span");
        crossIcon.innerHTML = "\u00d7";
        crossIcon.classList.add("list__task--cross");
        li.appendChild(crossIcon);
    }
};

submitBtn.addEventListener("click", addingTask);

const handleTaskClick = (e: any) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
};

list.addEventListener("click", handleTaskClick, false);
