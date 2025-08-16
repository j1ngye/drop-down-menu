import "./styles.css";

function createDropdown(buttonText, listItems) {
  const container = document.querySelector("#container");
  const dropDownContainer = document.createElement("div");
  const button = document.createElement("button");
  const list = document.createElement("ul");

  button.textContent = buttonText;
  button.classList.add("toggle");
  list.style.visibility = "hidden";
  list.classList.add("menu");

  listItems.forEach((listItem) => {
    const item = document.createElement("li");
    item.textContent = listItem.title;
    list.append(item);
  });

  button.addEventListener("click", () => {
    list.style.visibility =
      list.style.visibility === "hidden" ? "visible" : "hidden";
  });

  dropDownContainer.addEventListener("click", (e) => {
    const currentCommand = e.target.textContent.toLowerCase();
    controlMonitor(currentCommand);
  });

  dropDownContainer.appendChild(button);
  dropDownContainer.appendChild(list);
  container.appendChild(dropDownContainer);
}

const listitems = [
  { title: "Restart" },
  { title: "Sleep" },
  { title: "Shut down" },
];

createDropdown("Apple", listitems);

function controlMonitor(command) {
  const screen = document.querySelector(".screen");
  screen.addEventListener("mouseover", ChangeBg);
  switch (command) {
    case "restart":
      screen.style.backgroundColor = "black";
      setTimeout(() => {
        screen.style.backgroundColor = "white";
      }, 5000);
    case "sleep":
      screen.style.backgroundColor = "black";
    case "shut down":
      screen.style.backgroundColor = "black";
      screen.removeEventListener("mouseover", ChangeBg);
  }
}

function ChangeBg() {
  this.style.backgroundColor = "white";
}
