import Component from "./Component.js";
<<<<<<< HEAD
<<<<<<< HEAD:ice/w4/src/index.js
import Task from "./task.js";
=======
import Task from "./Task.js";
>>>>>>> 74c07367c17264209c7ff79158298be664c64ea5:ice/w4b/src/index.js
=======
import Task from "./Task.js";
>>>>>>> 307ce2a2cf0bf8328f7b94def959749935856c60
function runOnLoad()
{
    
    let element = document.createElement("div");
    element.id = "Test";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    console.log("Hello World truly");
    let firstTask = new Task(
        {
        done:false,
        content:"This is a task"}
    )
    let container = document.getElementById("container");
    let task = document.createElement("div");
    container.appendChild(task);
    task.innerHTML = firstTask.render();
    //element2.innerHTML = comp.render();
}


window.addEventListener("DOMContentLoaded", runOnLoad);