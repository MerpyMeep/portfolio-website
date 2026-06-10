let collected = 0;
const totalStars = 5;

function startGame() {
  document.getElementById("game").scrollIntoView({
    behavior: "smooth"
  });
}

const stars = document.querySelectorAll(".star");

stars.forEach(function (star) {
  star.addEventListener("click", function () {
    if (!star.classList.contains("collected")) {
      star.classList.add("collected");
      collected++;

      document.getElementById("score").textContent =
        "Collected: " + collected + " / " + totalStars;

      if (collected === totalStars) {
        document.getElementById("unlock-message").textContent =
          "Gallery unlocked!";

        document.getElementById("gallery").classList.remove("locked");

        setTimeout(function () {
          document.getElementById("gallery").scrollIntoView({
            behavior: "smooth"
          });
        }, 800);
      }
    }
  });
});
