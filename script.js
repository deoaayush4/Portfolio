// 🔮 Typewriter Effect (for homepage or about section)
window.addEventListener("load", () => {
  const typeTarget = document.getElementById("typewriter");
  if (typeTarget) {
    const text = "Hey there, I'm Aayush — Engineer, Creator, Stand-up Enthusiast.";
    let i = 0;
    const speed = 70;

    function typeWriter() {
      if (i < text.length) {
        typeTarget.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  }

  // 🧲 Floating Name - "Aayush"
  const nameFloat = document.createElement("div");
  nameFloat.id = "floatingName";
  nameFloat.textContent = "Aayush";
  document.body.appendChild(nameFloat);

  // Move it randomly across screen
  function floatName() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    nameFloat.style.transform = `translate(${x}px, ${y}px)`;
  }

  nameFloat.style.position = "fixed";
  nameFloat.style.fontSize = "1.4rem";
  nameFloat.style.color = "#fff";
  nameFloat.style.fontWeight = "bold";
  nameFloat.style.zIndex = "999";
  nameFloat.style.transition = "transform 3s ease-in-out";

  setInterval(floatName, 3000);
  floatName();
});

// ⏰ Activity Scheduler (for your Schedule section)
const scheduleTarget = document.getElementById("nextActivity");
if (scheduleTarget) {
  const schedule = [
    { time: "08", task: "Gym" },
    { time: "10", task: "Build Matchmaking App" },
    { time: "14", task: "LeetCode Practice" },
    { time: "17", task: "Reels/Social Media" },
    { time: "21", task: "Book Reading / UPSC Prep" },
  ];

  const nowHour = new Date().getHours();
  const upcoming = schedule.find(item => parseInt(item.time) > nowHour);

  scheduleTarget.innerText = upcoming
    ? `Next: ${upcoming.task} at ${upcoming.time}:00`
    : "You're done for the day! Time to chill 🎧";
}

// 🖼️ Scroll Fade-In Animation
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0px)";
    }
  });
});

fadeElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});

// 🎶 Background Music Toggle (Optional)
const musicBtn = document.getElementById("toggleMusic");
if (musicBtn) {
  const audio = new Audio("your-music.mp3"); // Make sure this file exists in your project
  audio.loop = true;
  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      musicBtn.innerText = "Play Music 🎵";
    } else {
      audio.play();
      musicBtn.innerText = "Pause Music 🔇";
    }
    isPlaying = !isPlaying;
  });
}

// ⏲️ Clock at Top Left
function updateClock() {
  const now = new Date();
  const hrs = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hrs}:${mins}:${secs}`;

  const clockEl = document.getElementById("clock");
  if (clockEl) {
    clockEl.textContent = timeString;
  }
}
setInterval(updateClock, 1000);
updateClock();

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const mainName = document.getElementById("mainName");

  if (mainName) {
    // Fade out slightly after scrolling 100px
    let opacity = 1 - scrollY / 300;
    if (opacity < 0.3) opacity = 0.3;
    mainName.style.opacity = opacity;
  }
});

