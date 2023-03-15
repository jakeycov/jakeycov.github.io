const messages = [
  {
    headline: "Embrace Non-Judgmental Awareness",
    sentence: "Observe your actions without judgment, and turn mistakes into valuable learning experiences.",
  },
  {
    headline: "Focus on the Present Moment",
    sentence: "Stay grounded in the here and now, letting go of the past and future to fully engage with each point.",
  },
  {
    headline: "Trust Your Instincts",
    sentence: "Believe in your abilities and allow your intuitive reactions to guide you on the court.",
  },
  {
    headline: "Develop a Pre-Point Routine",
    sentence: "Find consistency and focus through a simple routine before each point, helping you stay composed.",
  },
  {
    headline: "Enjoy the Journey",
    sentence: "Approach each match with positivity, and remember that growth comes from both victories and setbacks.",
  }
];

const headlineEl = document.querySelector(".headline");
const sentenceEl = document.querySelector(".sentence");
const btnEl = document.querySelector(".btn");

function displayMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  headlineEl.textContent = message.headline;
  sentenceEl.textContent = message.sentence;
}

btnEl.addEventListener("click", displayMessage);

// Display an initial message
displayMessage();
