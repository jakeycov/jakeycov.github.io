const messageCard = document.querySelector(".message-card");
const headline = document.querySelector(".headline");
const sentence = document.querySelector(".sentence");
const btn = document.querySelector(".btn");
const categoryButtons = document.querySelector(".category-buttons");

const messages = [
  {
    category: "focus",
    headline: "Focus on the Process",
    sentence: "Remember, it's not about winning or losing, but about playing your best.",
  },
  {
    category: "focus",
    headline: "Stay Present",
    sentence: "Don't dwell on past mistakes or future outcomes. Focus on the current point.",
  },
  {
    category: "confidence",
    headline: "Believe in Yourself",
    sentence: "You've trained hard for this. Trust your skills and play with confidence.",
  },
  {
    category: "confidence",
    headline: "Stay Positive",
    sentence: "Keep a positive attitude, even when things get tough. It can make all the difference.",
  },
  {
    category: "strategy",
    headline: "Play Smart",
    sentence: "Think about your opponent's weaknesses and use them to your advantage.",
  },
  {
    category: "strategy",
    headline: "Adapt and Overcome",
    sentence: "Be prepared to adjust your game plan as needed to handle unexpected challenges.",
  },
  // Add more messages as needed
];

let currentCategory = "focus";

function displayNewMessage() {
  const filteredMessages = messages.filter(
    (message) => message.category === currentCategory
  );
  const randomIndex = Math.floor(Math.random() * filteredMessages.length);
  const randomMessage = filteredMessages[randomIndex];
  headline.textContent = randomMessage.headline;
  sentence.textContent = randomMessage.sentence;

  // Add the flip class to create the flip effect
  messageCard.classList.add("flip");

  // Remove the flip class after the animation is complete (0.6s in this case)
  setTimeout(() => {
    messageCard.classList.remove("flip");
  }, 600);
}

function changeCategory(category) {
  currentCategory = category;
  displayNewMessage();
}

function createCategoryButtons() {
  const categories = Array.from(new Set(messages.map((message) => message.category)));
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.classList.add("category-btn");
    button.addEventListener("click", () => {
      changeCategory(category);

      // Set the active class for the selected category button
      document.querySelectorAll(".category-btn").forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });

    if (category === currentCategory) {
      button.classList.add("active");
    }

    categoryButtons.appendChild(button);
  });
}

btn.addEventListener("click", displayNewMessage);

createCategoryButtons();
displayNewMessage();
