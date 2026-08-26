let collected = 0;

function startGame() {
  document.getElementById("game").scrollIntoView({
    behavior: "smooth"
  });
}

function collectStar(star) {
  if (star.classList.contains("collected")) {
    return;
  }

  star.classList.add("collected");
  collected = collected + 1;

  document.getElementById("score").textContent =
    "Collected: " + collected + " / 5";

  if (collected >= 5) {
    document.getElementById("unlock-message").textContent =
        "Gallery unlocked!";

    document.querySelectorAll(".locked").forEach(function(section) {
        section.classList.remove("locked");
    });

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
  }
}
