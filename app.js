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

const opponentTypes = [
  {
    type: "Aggressive Baseline Player",
    focusPoints: [
      "Stay patient and consistent during rallies.",
      "Move your opponent side to side to create openings.",
      "Mix in drop shots and short angles to draw them forward.",
    ],
  },
  {
    type: "Serve and Volley Player",
    focusPoints: [
      "Aim for deep, well-placed returns to limit their volley options.",
      "Mix in passing shots and lobs to keep them guessing.",
      "Stay aggressive on your own serve to maintain pressure.",
    ],
  },
  {
    type: "Defensive Counterpuncher",
    focusPoints: [
      "Stay patient and wait for the right opportunity to attack.",
      "Use varied pace and spin to disrupt their rhythm.",
      "Stay aggressive and take the initiative when possible.",
    ],
  },
  // Add more opponent types and focus points here
];

const headlineEl = document.querySelector(".headline");
const sentenceEl = document.querySelector(".sentence");
const btnEl = document.querySelector(".btn");
const opponentSelect = document.getElementById("opponent");

function displayMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  headlineEl.textContent = message.headline;
  sentenceEl.textContent = message.sentence;
}

function displayOpponentFocus() {
  const selectedIndex = opponentSelect.selectedIndex;
  const opponent = opponentTypes[selectedIndex];
  const focusList = document.getElementById("focus-list");

  focusList.innerHTML = "";
  opponent.focusPoints.forEach((point) => {
    const listItem = document.createElement("li");
    listItem.textContent = point;
    focusList.appendChild(listItem);
  });
}

btnEl.addEventListener("click", displayMessage);

// Add event listener and call it initially to set the focus points
opponentSelect.addEventListener("change", displayOpponentFocus);
opponentSelect.dispatchEvent(new Event("change"));

// Display initial message
displayMessage();
