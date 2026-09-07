// ================================
// CONFIGURACIÓN RÁPIDA
// ================================

// URL real del streaming
const STREAM_URL = "https://sonicpanel.totalstreaming.net/8076/stream";

const player = document.getElementById("radioPlayer");
const playBtn = document.getElementById("playBtn");
const status = document.getElementById("playerStatus");

playBtn.addEventListener("click", async () => {
  if (!STREAM_URL) {
    status.textContent =
      "Agrega la URL del streaming en STREAM_URL dentro de radio.js.";

    status.classList.add("error");
    return;
  }

  if (player.paused) {
    player.src = STREAM_URL;

    try {
      await player.play();

      playBtn.querySelector(".play-icon").textContent = "❚❚";
      playBtn.lastChild.textContent = " PAUSAR";

      status.textContent = "Reproduciendo en vivo";
      status.classList.remove("error");
    } catch (e) {
      status.textContent = "No fue posible iniciar el streaming.";

      status.classList.add("error");
    }
  } else {
    player.pause();

    playBtn.querySelector(".play-icon").textContent = "▶";
    playBtn.lastChild.textContent = " ESCUCHAR EN VIVO";

    status.textContent = "Streaming pausado";
  }
});

// ================================
// MENÚ MÓVIL
// ================================

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".menu").classList.remove("open");
  });
});
