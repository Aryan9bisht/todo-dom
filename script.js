/*
  let items = 0;
  let completed = [];
  let container = document.getElementById("container");
let task={
  inputVal:[],
  status:[]
};
  document.getElementById("f1").addEventListener("submit", function (event) {
    event.preventDefault();


    
    let inputElement = document.querySelector(".input input");
    let value = inputElement.value;
    task.inputVal.push(value);
    task.status.push('false');
    createElem();
    /*
    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        label.style.textDecoration = "line-through";
        label.style.color = "grey";
        completed.push(checkbox);
      } else {
        label.style.textDecoration = "none";
        label.style.color = "black";
        const index = completed.indexOf(checkbox);
        if (index > -1) {
          completed.splice(index, 1);
        }
      }
      */
     /*
      updateItemCount();
    });
  
function createElem(){
  task.inputVal.forEach((element,index) => {
    let li = document.createElement("li");
    let inputElement = document.querySelector(".input input");
    li.className = "list-item";
    console.log(element);
    console.log(task.status[index]);
    let a = document.createElement("button");
a.className = "delete";
a.appendChild(document.createTextNode("X"));

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.className = "check";
if(task.status[index]){
  checkbox.checked='true';
}
else{
  checkbox.checked='false';
}
items++;
updateItemCount();

let label = document.createElement("label");
label.className = "check-label";
label.appendChild(document.createTextNode(element));

li.appendChild(checkbox);
li.appendChild(label);
li.appendChild(a);

container.appendChild(li);

inputElement.value = "";


  });
  
}
let a = document.getElementsByClassName('delete');
    a.addEventListener("click", () => {
      if (checkbox.checked) {
        const index = completed.indexOf(checkbox);
        if (index > -1) {
          completed.splice(index, 1);
        }
      }
      li.remove();
      items--;
      updateItemCount();
    });

    label.addEventListener("dblclick", function () {
      let input = document.createElement("input");
      input.type = "text";
      input.value = label.textContent;
      input.className = "edit-input";

      li.replaceChild(input, label);

      input.focus();

      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          label.textContent = input.value;
          li.replaceChild(label, input);
        }
      });

      input.addEventListener("blur", function () {
        label.textContent = input.value;
        li.replaceChild(label, input);
      });
    });
  
  function getCheckedItems() {
    let completeBoxes = document.querySelectorAll(".check");
    document.getElementById("active").style.background = "none";
    document.getElementById("clear").style.background = "none";
    document.getElementById("all").style.background = "none";
    document.getElementById("btn5").style.background = "lightblue";

    completeBoxes.forEach((checkBox) => {
      let li = checkBox.parentElement;

      if (checkBox.checked) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  }

  document.getElementById("btn5").addEventListener("click", getCheckedItems);
  function getActive() {
    let completeBoxes = document.querySelectorAll(".check");
    document.getElementById("btn5").style.background = "none";
    document.getElementById("clear").style.background = "none";
    document.getElementById("all").style.background = "none";
    document.getElementById("active").style.background = "lightblue";
    completeBoxes.forEach((checkBox) => {
      let li = checkBox.parentElement;

      if (checkBox.checked) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    });
  }
  document.getElementById("active").addEventListener("click", getActive);
  function All() {
    let completeBoxes = document.querySelectorAll(".check");

    document.getElementById("btn5").style.background = "none";
    document.getElementById("clear").style.background = "none";
    document.getElementById("active").style.background = "none";
    document.getElementById("all").style.background = "lightblue";

    completeBoxes.forEach((checkBox) => {
      let li = checkBox.parentElement;

      if (checkBox.checked) {
        li.style.display = "block";
      } else {
        li.style.display = "block";
      }
    });
  }
  document.getElementById("all").addEventListener("click", All);
  function clear() {
    document.getElementById("btn5").style.background = "none";
    document.getElementById("clear").style.background = "lightblue";
    document.getElementById("all").style.background = "none";
    document.getElementById("active").style.background = "none";

    let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      li[i].remove();
      items = 0;
      completed = [];
      updateItemCount();
    }
    console.log(li);
  }
  document.getElementById("clear").addEventListener("click", clear);

  function updateItemCount() {
    let itemsCountElement = document.querySelector(".itemsCount");
    let completedCount = completed.length;
    console.log(completed);
    itemsCountElement.innerHTML = `${items - completedCount} left`;
  }
*/
let items = 0;
let idIndex=0;
let completed = [];
let container = document.getElementById("container");
let task = {
  inputVal: [],
  status: [],
  id:[]
};

document.getElementById("f1").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputElement = document.querySelector(".input input");
  let value = inputElement.value;
  task.inputVal.push(value);
  task.status.push(false);
  task.id.push(idIndex++);
  createElem();

});

function createElem() {
  let liElements = container.querySelectorAll("li");
  liElements.forEach(li => {
    li.remove();
  });
  console.log(task);
  task.inputVal.forEach((element, index) => {
    let li = document.createElement("li");
    li.className = "list-item";

    let a = document.createElement("button");
    a.className = "delete";
    a.appendChild(document.createTextNode("X"));

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    let label = document.createElement("label");
    label.className = "check-label";
    label.appendChild(document.createTextNode(element));
    if (task.status[index]) {
      
      checkbox.checked = true;
      label.style.textDecoration = "line-through";
      label.style.color = "grey";
     updateItemCount();
    }
    items++;

    
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(a);

    container.appendChild(li);
    let inputElement = document.querySelector(".input input");
    inputElement.value = "";

 updateItemCount();
  });

  let deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button,index) => {
    button.addEventListener("click", function () {
      let listItem = button.parentElement;
      let checkbox = listItem.querySelector('.check');

      if (checkbox.checked) {
        const index = completed.indexOf(checkbox);
        if (index > -1) {
          completed.splice(index, 1);
        }
      }

      listItem.remove();
      items--;
      updateItemCount();
      task.inputVal.splice(index, 1);
      task.status.splice(index, 1);
      createElem();
    
    });
  });
  let checkButtons = document.querySelectorAll('.check');
  checkButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      let li = button.parentElement;
      let label = li.querySelector('label');

  console.log(li);
      if (button.checked) {
        label.style.textDecoration = "line-through";
        label.style.color = "grey";
       task.status[index]=true;
       updateItemCount();
      } else {
        label.style.textDecoration = "none";
        label.style.color = "black";
        const index = completed.indexOf(button);
        if (index > -1) {
          completed.splice(index, 1);
        }
       
        task.status[index]=false;
        task.status.splice(index, 1);
        console.log(task);
        updateItemCount();
      }
      
     
    });
  });
  
  
  
  let labels = document.querySelectorAll('.check-label');
labels.forEach((label, index) => {
  label.addEventListener("dblclick", function () {
    let input = document.createElement("input");
    input.type = "text";
    input.value = label.textContent;
    input.className = "edit-input";

    let listItem = label.parentElement;
    listItem.replaceChild(input, label);

    input.focus();

    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        task.inputVal[index] = input.value;
        updateItemCount(); 
        input.blur(); 
      }
    });

    input.addEventListener("blur", function () {
      label.textContent = input.value;
      task.inputVal[index] = input.value; 
      listItem.replaceChild(label, input);
    });
  });
});

}
function updateItemCount(){
  let count = task.status.reduce((acc, status, index) => {
    if (!status) {
      acc++;
    }
    return acc;
  }, 0);
  
  
  let itemsCountElement = document.querySelector(".itemsCount");
 
  itemsCountElement.innerHTML = `${count} left`;
}

function clear() {
  document.getElementById("btn5").style.background = "none";
  document.getElementById("clear").style.background = "lightblue";
  document.getElementById("all").style.background = "none";
  document.getElementById("active").style.background = "none";

  let li = document.querySelectorAll("li");
  task.inputVal = [];
  task.status = [];
  id=[];
      createElem();
      updateItemCount();
 
}
document.getElementById("clear").addEventListener("click", clear);
function All() {
  let completeBoxes = document.querySelectorAll(".check");

  document.getElementById("btn5").style.background = "none";
  document.getElementById("clear").style.background = "none";
  document.getElementById("active").style.background = "none";
  document.getElementById("all").style.background = "lightblue";
createElem();
}
document.getElementById("all").addEventListener("click", All);
document.getElementById("active").addEventListener("click", getActive);
  function getActive() {
    let completeBoxes = document.querySelectorAll(".check");
    document.getElementById("btn5").style.background = "none";
    document.getElementById("clear").style.background = "none";
    document.getElementById("all").style.background = "none";
    document.getElementById("active").style.background = "lightblue";
    completeBoxes.forEach((checkBox) => {
      let li = checkBox.parentElement;

      if (checkBox.checked) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
    });
  }
  document.getElementById("btn5").addEventListener("click", getCheckedItems);
  function getCheckedItems() {
    let completeBoxes = document.querySelectorAll(".check");
    document.getElementById("active").style.background = "none";
    document.getElementById("clear").style.background = "none";
    document.getElementById("all").style.background = "none";
    document.getElementById("btn5").style.background = "lightblue";

    completeBoxes.forEach((checkBox) => {
      let li = checkBox.parentElement;

      if (checkBox.checked) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  }