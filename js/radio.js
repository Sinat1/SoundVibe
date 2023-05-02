const refs = {
  playBtn: document.querySelector(".radiostation__play-btn"),
};

// let currentAudio;

function onPlayHitFM() {
  const currentAudio = new Audio("https://online.hitfm.ua/HitFM");

  if (currentAudio) {
    currentAudio.pause();
  } else {
    // currentAudio = new Audio("https://online.kissfm.ua/KissFM");

    currentAudio.play();
  }
}
refs.playBtn.addEventListener("click", onPlayHitFM);
