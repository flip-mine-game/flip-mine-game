let balance = 0;
let mining = false;
const COOLDOWN_TIME = 300; // 5 minutos

const mineBtn = document.getElementById("mineBtn");
const ptcBtn = document.getElementById("ptcBtn");
const balanceEl = document.getElementById("balance");
const dashBalance = document.getElementById("dashBalance");
const historyEl = document.getElementById("history");
const machine = document.getElementById("machine");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("status");
const ptcStatus = document.getElementById("ptcStatus");

// --------- COOLDOWN ---------
function getRemainingCooldown() {
  const last = localStorage.getItem("lastMineTime");
  if (!last) return 0;
  const diff = Math.floor((Date.now() - Number(last)) / 1000);
  return Math.max(COOLDOWN_TIME - diff, 0);
}

function startCooldownTimer() {
  mineBtn.disabled = true;
  let remaining = getRemainingCooldown();

  const timer = setInterval(() => {
    remaining = getRemainingCooldown();
    const min = Math.floor(remaining / 60);
    const sec = remaining % 60;
    statusText.innerText = `Aguarde ${min}:${sec.toString().padStart(2, "0")}`;

    if (remaining <= 0) {
      clearInterval(timer);
      mineBtn.disabled = false;
      statusText.innerText = "Clique para começar a minerar";
    }
  }, 1000);
}

// --------- MINERAÇÃO ---------
mineBtn.onclick = () => {
  if (mining || getRemainingCooldown() > 0) return;

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
      dashBalance.innerText = balance.toFixed(4);

      // Histórico
      const li = document.createElement("li");
      li.innerText = `Mineração: +0.0001 MATIC`;
      historyEl.prepend(li);

      localStorage.setItem("lastMineTime", Date.now().toString());
      startCooldownTimer();
    }
  }, 300);
};

// --------- PTC FAKE ---------
ptcBtn.onclick = () => {
  ptcStatus.innerText = "Assistindo anúncio...";
  setTimeout(() => {
    balance += 0.00005; // saldo fake PTC
    balanceEl.innerText = balance.toFixed(4);
    dashBalance.innerText = balance.toFixed(4);
    ptcStatus.innerText = "PTC concluído! Saldo adicionado.";

    const li = document.createElement("li");
    li.innerText = `PTC: +0.00005 MATIC`;
    historyEl.prepend(li);
  }, 5000);
};

// Inicia cooldown se existir
if (getRemainingCooldown() > 0) {
  startCooldownTimer();
}
