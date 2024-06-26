const messages = [
  {
    title: "Fun fact",
    icon: "😂",
    message: "I'm a developer based in Nairobi, Kenya.",
  },
  { title: "Food", icon: "🍗", message: "My favorite food is rice and chicken." },
  { title: "Gamer", icon: "🎮", message: "I love playing video games." },
  { title: "Music", icon: "🎵", message: "I like diverse & thriling content" },
  { title: "Movie", icon: "🎬", message: "My favorite movie is The Dictator." },
  { title: "Show", icon: "🍿", message: "My favorite series is Money Heist." },
];

const messageContainer = document.querySelector(".message-container");
let message = messageContainer.querySelector(".message");
const titleElement = document.querySelector(".title");
const iconElement = document.querySelector(".icon");

let currentIndex = 0;

function showNextMessage() {
  currentIndex = (currentIndex + 1) % messages.length;
  const nextMessage = messages[currentIndex];

  let newMessageElement = document.createElement("div");
  newMessageElement.classList.add("message");
  newMessageElement.innerHTML = `<p>${nextMessage.message}</p>`;
  newMessageElement.style.transform = "translateX(100%)";

  messageContainer.appendChild(newMessageElement);

  setTimeout(() => {
    message.style.transform = "translateX(-100%)";
    newMessageElement.style.transform = "translateX(0)";
  }, 40);

  setTimeout(() => {
    messageContainer.removeChild(message);
    message = newMessageElement;
    titleElement.textContent = nextMessage.title;
    iconElement.textContent = nextMessage.icon;
  }, 500);
}

//change the message every 5 seconds
setInterval(showNextMessage, 2000);