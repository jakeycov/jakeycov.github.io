const messages = {
  motivational: [
    // Add motivational messages here
  ],
  technical: [
    // Add technical messages here
  ],
  mental: [
    // Add mental messages here
  ],
};

const headlineEl = document.querySelector(".headline");
const sentenceEl = document.querySelector(".sentence");
const btnEl = document.querySelector(".btn");
const categoryButtonsEl = document.querySelector(".category-buttons");

let currentCategory = "motivational";

function createCategoryButton(category) {
  const button = document.createElement("button");
  button.textContent = category;
  button.classList.add("category-btn");

  button.addEventListener("click", () => {
    currentCategory = category;
    displayMessage();
  });

  categoryButtonsEl.appendChild(button);
}

function displayMessage() {
  const randomIndex = Math.floor(Math.random() * messages[currentCategory].length);
  const message = messages[currentCategory][randomIndex];

  headlineEl.textContent = message.headline;
  sentenceEl.textContent = message.sentence;
}

Object.keys(messages).forEach(createCategoryButton);

btnEl.addEventListener("click", displayMessage);

// Display an initial message
displayMessage();
