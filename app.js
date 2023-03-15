const messages = {
  motivational: [
    {
      headline: "Believe in Yourself",
      sentence: "Your self-confidence is a powerful force; trust your abilities and you will succeed."
    },
    {
      headline: "Perseverance Pays Off",
      sentence: "Great achievements come from persistence and hard work; never give up on your dreams."
    },
    {
      headline: "Stay Positive",
      sentence: "Focus on the positives and maintain a winning mindset even during difficult matches."
    },
    {
      headline: "Overcome Challenges",
      sentence: "Embrace adversity as an opportunity to grow and improve your game."
    },
    {
      headline: "Learn from Losses",
      sentence: "Treat each defeat as a chance to learn and come back stronger next time."
    },
  ],
  technical: [
    {
      headline: "Consistency is Key",
      sentence: "Strive to hit each ball with precision and control, building a reliable foundation for your game."
    },
    {
      headline: "Master Your Footwork",
      sentence: "Good footwork is the foundation of great tennis; keep moving and stay on your toes."
    },
    {
      headline: "Follow Through",
      sentence: "A smooth, fluid follow-through is essential for generating power and control in your shots."
    },
    {
      headline: "Vary Your Shots",
      sentence: "Keep your opponent guessing by mixing up your shots, spins, and tactics."
    },
    {
      headline: "Serve Smart",
      sentence: "Focus on placement and consistency when serving to create pressure and gain an advantage."
    },
  ],
  mental: [
    {
      headline: "Stay Present",
      sentence: "Concentrate on the current point, letting go of past mistakes and future outcomes."
    },
    {
      headline: "Calm Under Pressure",
      sentence: "Embrace high-pressure situations and remain composed to make better decisions on the court."
    },
    {
      headline: "Visualize Success",
      sentence: "Regularly imagine yourself succeeding in matches to help build confidence and mental strength."
    },
    {
      headline: "Set Realistic Goals",
      sentence: "Break down your aspirations into achievable short-term and long-term goals to stay motivated."
    },
    {
      headline: "Stay Patient",
      sentence: "Understand that progress takes time; focus on steady improvement and trust the process."
    },
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

  if (category === currentCategory) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    // Deselect the previously active button
    const activeButton = categoryButtonsEl.querySelector(".category-btn.active");
    if (activeButton) {
      activeButton.classList.remove("active");
    }

    // Select the clicked button and update the current category
    button.classList.add("active");
    currentCategory = category;
    displayMessage();
  });

  categoryButtonsEl.appendChild(button);
}

function displayMessage() {
  const randomIndex = Math.floor(Math.random() * messages[currentCategory].length);
  const message = messages[currentCategory][randomIndex];

  headlineEl.textContent = message.head
