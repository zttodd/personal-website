const body = document.getElementsByTagName("body")[0];

// set class based on current mode
if (localStorage.getItem("mode") === "light") {
  body.classList.remove("dark");
  body.classList.add("light");
} else if (localStorage.getItem("mode") === "dark") {
  body.classList.remove("light");
  body.classList.add("dark");
}

// create buttons
const buttonDiv = document.createElement("div");
buttonDiv.classList.add("modes");

const buttonProps = [
  {
    text: "Light",
    class: "light",
    label: "Activate Light Mode"
  },
  {
    text: "Dark",
    class: "dark",
    label: "Activate Dark Mode"
  }
];

for (let index = 0; index < buttonProps.length; index++) {
  const button = document.createElement("button");

  // add text inside button
  button.innerHTML = buttonProps[index].text;

  // add theme class
  button.classList.add(buttonProps[index].class);

  // add attributes
  button.setAttribute("aria-label", buttonProps[index].label);
  button.setAttribute("title", buttonProps[index].label);

  // on click, activate theme
  button.addEventListener("click", function() {
    body.classList = "";
    body.classList.add(buttonProps[index].class);
    localStorage.setItem("mode", buttonProps[index].class);
  });

  // append button to buttonDiv
  buttonDiv.appendChild(button);
}

// add button container to body
body.appendChild(buttonDiv);
