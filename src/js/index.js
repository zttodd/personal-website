// create buttons
const body = document.getElementsByTagName("body")[0];

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
  });

  // append button to buttonDiv
  buttonDiv.appendChild(button);
}

body.appendChild(buttonDiv);
