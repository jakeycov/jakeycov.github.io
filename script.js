const messageCard = document.querySelector(".message-card");
const headline = document.querySelector(".headline");
const sentence = document.querySelector(".sentence");
const btn = document.querySelector(".btn");
const categoryButtons = document.querySelector(".category-buttons");

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
{
headline: "Fuel Your Passion",
sentence: "Stay connected to your love for the game and let it drive your efforts on and off the court."
},
{
headline: "Trust Your Training",
sentence: "Believe in the hard work you've put in during practice; it will translate into results during matches."
},
{
headline: "Small Victories Matter",
sentence: "Celebrate the small achievements along the way to stay motivated and focused on your goals."
},
{
headline: "Invest in Yourself",
sentence: "Your growth as a player is an investment; devote time and energy to improving your game."
},
{
headline: "Transform Fear into Action",
sentence: "Use any fear or nerves as fuel to work harder, perform better, and rise to the challenge."
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
{
headline: "Develop Your Backhand",
sentence: "A strong backhand can be a game-changer; work on technique and consistency to make it a weapon."
},
{
headline: "Improve Your Net Game",
sentence: "Develop your volley skills and net presence to put more pressure on your opponent and seize opportunities."
},
{
headline: "Work on Your Return",
sentence: "A solid return game can disrupt your opponent's rhythm and give you an edge in the match."
},
{
headline: "Master Different Surfaces",
sentence: "Adapt your game to different court surfaces to become a versatile and well-rounded player."
},
{
headline: "Strengthen Your Stamina",
sentence: "Incorporate endurance training into your routine to maintain a high level of performance throughout long matches."
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
{
headline: "Embrace the Unexpected",
sentence: "Adapt to unforeseen challenges and remain resilient in the face of adversity during matches."
},
{
headline: "Find Your Focus Ritual",
sentence: "Develop a pre-point routine or ritual to help you refocus and stay in the zone during matches."
},
{
headline: "Manage Expectations",
sentence: "Set realistic expectations for yourself to avoid unnecessary pressure and disappointment."
},
{
headline: "Develop Mental Toughness",
sentence: "Cultivate the ability to bounce back from setbacks, maintain confidence, and perform under pressure."
},
{
headline: "Stay Open to Feedback",
sentence: "Embrace constructive criticism and use it as an opportunity to grow and improve your game."
},
  ],
};

let currentCategory = "motivational";

function displayNewMessage() {
  messageCard.classList.add("flipOut");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * messages[currentCategory].length);
    const randomMessage = messages[currentCategory][randomIndex];
    headline.textContent = randomMessage.headline;
    sentence.textContent = randomMessage.sentence;

    messageCard.classList.remove("flipOut");
    messageCard.classList.add("flipIn");
  }, 600);

  setTimeout(() => {
    messageCard.classList.remove("flipIn");
  }, 1200);
}

function createCategoryButtons() {
  Object.keys(messages).forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.classList.add("category-btn");
    button.addEventListener("click", () => {
      currentCategory = category;
      displayNewMessage();

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