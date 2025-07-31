
// Main redirect
setTimeout(() => {
  window.location.href = "main.html"https://renggonk.github.io/RENG-WEB/}, 4000);

// Play sound
window.onload = function () {
  const sound = document.getElementById("frogSound");
  sound.volume = 0.5;
  sound.play().catch(() => {
    console.log("Autoplay diblokir oleh browser.");
  });
};
