let balance = 0;
let mining = false;

const mineBtn = document.getElementById("mineBtn");
const ptcBtn = document.getElementById("ptcBtn");
const balanceEl = document.getElementById("balance");
const machine = document.getElementById("machine");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("status");
const ptcStatus = document.getElementById("ptcStatus");

mineBtn.onclick = () => {
  if (mining) return;

  mining = true;
  machine.classList.add("active");
  statusText.innerText = "Minerando...";
  progressBar.style.width = "0%";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      mining = false;
      machine.classList.remove("active");

      balance += 0.0001; // saldo fake
      balanceEl.innerText = balance.toFixed(4);
      statusText.innerText = "Mineração concluída!";
    }
  }, 300);
};

ptcBtn.onclick = () => {
  ptcStatus.innerText = "Assistindo anúncio...";
  setTimeout(() => {
    balance += 0.00005; // saldo fake PTC
    balanceEl.innerText = balance.toFixed(4);
    ptcStatus.innerText = "PTC concluído! Saldo adicionado.";
  }, 5000);
};
