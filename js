let saldo = 0;

function minerar() {
  const miner = document.getElementById("miner");
  const progress = document.getElementById("progress");

  miner.classList.add("active");
  progress.style.width = "0%";

  let p = 0;
  let interval = setInterval(() => {
    p += 10;
    progress.style.width = p + "%";

    if (p >= 100) {
      clearInterval(interval);
      miner.classList.remove("active");
      saldo += 0.00001;
      document.getElementById("saldo").innerText = saldo.toFixed(6);
    }
  }, 300);
}

function ptc() {
  saldo += 0.000005;
  document.getElementById("saldo").innerText = saldo.toFixed(6);
  alert("Anúncio visualizado!");
}
