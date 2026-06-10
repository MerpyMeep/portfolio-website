let collected = 0;
const totalStars = 5;

const stars = document.querySelectorAll(".star");
const score = document.getElementById("score");
const message = document.getElementById("unlock-message");
const gallery = document.getElementById("gallery");

function startGame() {
document.getElementById("game").scrollIntoView({
behavior: "smooth"
});
}

stars.forEach((star) => {
star.addEventListener("click", () => {
if (!star.classList.contains("collected")) {
star.classList.add("collected");
collected++;

```
  score.textContent = `Collected: ${collected} / ${totalStars}`;

  if (collected === totalStars) {
    message.textContent = "Gallery unlocked!";

    gallery.classList.remove("locked");

    setTimeout(() => {
      gallery.scrollIntoView({
        behavior: "smooth"
      });
    }, 800);
  }
}
```

});
});
