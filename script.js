document.addEventListener("DOMContentLoaded", function () {
  let items = 0;
  let completed = [];
  let container = document.getElementById("container");

  document.getElementById("f1").addEventListener("submit", function (event) {
    event.preventDefault();

    let li = document.createElement("li");
    li.className = "list-item";
    let inputElement = document.querySelector(".input input");
    let value = inputElement.value;
    let a = document.createElement("button");
    a.className = "delete";
    a.appendChild(document.createTextNode("X"));

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "check";
    items++;
    updateItemCount();

    let label = document.createElement("label");
    label.className = "check-label";
    label.appendChild(document.createTextNode(value));

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(a);

    container.appendChild(li);

    inputElement.value = "";

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
      updateItemCount();
    });

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
});
