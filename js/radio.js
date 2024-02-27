const refs = {
  playHitFMBtn: document.querySelector(".radiostation__play-btn--first"),
  playNRJBtn: document.querySelector(
    ".radiostation__description-wrapper--second"
  ),
  playKissFMBtn: document.querySelector(
    ".radiostation__description-wrapper--third"
  ),
  playRadioROKSBtn: document.querySelector(
    ".radiostation__description-wrapper--fourth"
  ),
};

const hitFM = new Audio("https://online.hitfm.ua/HitFM");
const NRJ = new Audio("https://cast.radiogroup.com.ua/nrj320");
const kissFM = new Audio("https://online.kissfm.ua/KissFM");
const radioROKS = new Audio("https://online.radioroks.ua/RadioROKS");

function onPlayHitFM() {
  if (hitFM.paused) {
    NRJ.pause();
    kissFM.pause();
    radioROKS.pause();

    hitFM.play();
  } else {
    hitFM.pause();
  }
}

function onPlayNRJ() {
  if (NRJ.paused) {
    hitFM.pause();
    kissFM.pause();
    radioROKS.pause();

    NRJ.play();
  } else {
    NRJ.pause();
  }
}

function onPlayKissFM() {
  if (kissFM.paused) {
    hitFM.pause();
    NRJ.pause();
    radioROKS.pause();

    kissFM.play();
  } else {
    kissFM.pause();
  }
}

function onPlayRadioROKS() {
  if (radioROKS.paused) {
    hitFM.pause();
    NRJ.pause();
    kissFM.pause();

    radioROKS.play();
  } else {
    radioROKS.pause();
  }
}

refs.playHitFMBtn.addEventListener("click", onPlayHitFM);
refs.playNRJBtn.addEventListener("click", onPlayNRJ);
refs.playKissFMBtn.addEventListener("click", onPlayKissFM);
refs.playRadioROKSBtn.addEventListener("click", onPlayRadioROKS);
