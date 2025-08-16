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

  dropDownContainer.appendChild(button);
  dropDownContainer.appendChild(list);
  container.appendChild(dropDownContainer);
}

const listitems = [
  { title: "Reset" },
  { title: "Sleep" },
  { title: "Shut down" },
];

createDropdown("Apple", listitems);
