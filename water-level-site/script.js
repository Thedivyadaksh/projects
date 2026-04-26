const panels = document.querySelectorAll('.panel');

function activatePanel() {
  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.7 && rect.bottom > 100) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', activatePanel);
activatePanel();
let level = 0;

function fillWater() {
  if (level >= 100) return;

  level += 25;

  document.getElementById("water").style.height = level + "%";

  updateLEDs();

  if (level === 100) {
    showAlert();
  }
}

function resetWater() {
  level = 0;
  document.getElementById("water").style.height = "0%";

  document.querySelectorAll(".led").forEach(led => {
    led.classList.remove("active");
  });

  hideAlert();
}

function updateLEDs() {
  const leds = document.querySelectorAll(".led");

  leds.forEach((led, index) => {
    if ((index + 1) * 25 <= level) {
      led.classList.add("active");
    }
  });
}

/* ALERT FUNCTIONS */
function showAlert() {
  document.getElementById("alertBox").style.display = "block";
}

function hideAlert() {
  document.getElementById("alertBox").style.display = "none";
}