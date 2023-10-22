const addForm = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messsage = document.querySelector(".message span");
const deleteMessage = document.querySelector(".delete-message");
const enventoryMessage = document.querySelector(".Enventory");
const searchForm = document.querySelector(".search");


function updateEnventoryMessage(){
    let getTask = tasks.children.length;
    if(getTask <= 0){
        enventoryMessage.textContent = "your tasks enventory is empty";
    } else{
        enventoryMessage.textContent = "Try to Accomplish you Tasks on time.";
    }
    
}
updateEnventoryMessage();
function updateTasks(){
    const getAllTasks = tasks.children.length;
    if(getAllTasks > 0){
        messsage.textContent = `You are ${getAllTasks} pending tasks.`
    } else{
        messsage.textContent = `You have not added any task yet.`
    }
    
};

updateTasks();
addForm.addEventListener("submit", event => {
event.preventDefault();
    const value = addForm.task.value.trim();
if(value.length){
    tasks.innerHTML += `<li>
                            <span>${value}</span>
                            <i class="bi bi-trash-fill delete"></i>
                        </li>`
    addForm.reset();
    updateTasks();
    updateEnventoryMessage();
}
})

tasks.addEventListener("click", event => {
if(event.target.classList.contains("delete")){
    let message = `Message :  you have successfully deleted the task : ${event.target.parentElement.textContent}`;
    if(message){
        deleteMessage.textContent = message;
        setTimeout(() => {
            deleteMessage.textContent = "";
        }, 1000);
    }
    event.target.parentElement.remove();
    updateTasks();
    updateEnventoryMessage();
}
});

clearAll.addEventListener("click", event => {
    const allTasks = tasks.querySelectorAll('li');
    allTasks.forEach(element => {
        element.remove();
        updateTasks();
        updateEnventoryMessage();
        
    });
});

function search(searchTerm){
    Array.from(tasks.children)
    .filter( task => {
        return !task.textContent
        .toLowerCase()
        .includes(searchTerm);
    })
    .forEach(event => {
        event.classList.add("hide");
    });

    Array.from(tasks.children)
    .filter(task => {
        return task.textContent
        .toLowerCase()
        .includes(searchTerm);
    })
    .forEach(item => {
        item.classList.remove("hide");
    });
}

searchForm.addEventListener("keyup", event => {
    let searchTerm = searchForm.task.value.toLowerCase();
   search(searchTerm);
});


