let collected = 0;
const totalFlowers = 5;

function startGame() {
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("game").scrollIntoView({ behavior: "smooth" });
}

const flowers = document.querySelectorAll(".flower");
const score = document.getElementById("score");
const message = document.getElementById("unlock-message");

flowers.forEach((flower) => {
  flower.addEventListener("click", () => {
    if (!flower.classList.contains("collected")) {
      flower.classList.add("collected");
      collected++;

      score.textContent = `Collected: ${collected} / ${totalFlowers}`;

      if (collected === totalFlowers) {
        message.textContent = "You unlocked the full portfolio gallery!";
        document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
