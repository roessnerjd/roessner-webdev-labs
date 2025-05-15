// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const output1 = document.querySelector(".output");

// add an event listener on the target element
copyButton.addEventListener("click", handleCopyClick);

// callback function to handle event
function handleCopyClick() {
  output1.textContent = input1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input2 = document.getElementById("userInput2");
const output2 = document.createElement("div");
output2.classList.add("output");
input2.parentNode.appendChild(output2);

// add an event listener on the target element
input2.addEventListener("input", handleLiveInput);

// callback function to handle event
function handleLiveInput() {
  output2.textContent = input2.value;
}
