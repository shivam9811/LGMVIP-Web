const input=document.querySelector(".inp")
const btn=document.querySelector('.button')
const tasks=document.querySelector(".tasks")
const taskList=document.querySelector('.task')

btn.addEventListener("click",(e)=>{
   e.preventDefault();
   if(input.value===''){
       alert("add a task please")
    }
    else{
        const task=document.createElement("div");
        addTodo(task);
        let current_tasks=document.querySelectorAll(".delete")
        deleteTodo(current_tasks)
}
})

addTodo=(task)=>{
    task.classList.add('task');
    task.innerHTML=`<div class="content">${input.value}</div>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>`
    tasks.appendChild(task)
    input.value="";
}

deleteTodo=(current_tasks)=>{
    current_tasks.forEach((t)=>{
        t.addEventListener("click",function(){
            this.parentNode.remove();
        })
    })
}


let list = document.querySelector('.tasks');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'DIV') {
    ev.target.parentElement.classList.toggle('checked');
  }
}, false);

