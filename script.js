// Encouraging messages for Neema
const messages = [
    "You are beautiful, inside and out. 🌸",
    "You are loved more than you know. 💖",
    "Your strength grows even on hard days. 🌱",
    "The world is better because you're in it. 🌎",
    "Your journey matters—every step. 👣",
    "You are enough, exactly as you are. 🌟",
  ];
  
  // DOM elements
  const adviceButton = document.getElementById('advice-button');
  const dynamicMessage = document.getElementById('dynamic-message');
  
  // Random message generator
  adviceButton.addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    dynamicMessage.innerHTML = randomMessage;
    createConfetti();
  });
  
  // Confetti effect
  function createConfetti() {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  }