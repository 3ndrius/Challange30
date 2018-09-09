window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const keys = document.querySelectorAll(".key");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    key.classList.remove("active");
  }
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));
});
