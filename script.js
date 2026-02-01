/* =========================
   FLIP MINE - BETA
   Script principal
   Tudo FAKE (protótipo)
========================= */

// =========================
// LOGIN / REGISTRO (FAKE)
// =========================
function login() {
  localStorage.setItem("flipmine_logged", "true");
  window.location.href = "../dashboard.html";
}

function register() {
  localStorage.setItem("flipmine_logged", "true");
  window.location.href = "../dashboard.html";
}

function googleLogin() {
  alert("Login com Google (FAKE - BETA)");
  localStorage.setItem("flipmine_logged", "true");
  window.location.href = "../dashboard.html";
}

// =========================
// PROTEÇÃO DE PÁGINAS
// =========================
function protectPage() {
  const logged = localStorage.getItem("flipmine_logged");

  if (!logged) {
    window.location.href = "auth/login.html";
  }
}

// Chama proteção automaticamente
if (
  window.location.pathname.includes("dashboard") ||
  window.location.pathname.includes("faucet") ||
  window.location.pathname.includes("ptc")
) {
  protectPage();
}

// =========================
// SALDO FAKE
// =========================
let balance = parseFloat(localStorage.getItem("flipmine_balance")) || 0;

function updateBalance() {
  const el = document.getElementById("balance");
  if (el) {
    el.innerText = balance.toFixed(3) + " FLIP";
  }
  localStorage.setItem("flipmine_balance", balance);
}

// =========================
// FAUCET FAKE
// =========================
function claimFaucet() {
  balance += 0.001;
  updateBalance();
  alert("Você minerou 0.001 FLIP (FAKE)");
}

// =========================
// PTC FAKE
// =========================
function watchAd(seconds) {
  alert("Assistindo anúncio fake por " + seconds + "s...");
  setTimeout(() => {
    balance += 0.002;
    updateBalance();
    alert("Anúncio concluído! +0.002 FLIP (FAKE)");
  }, seconds * 1000);
}

// =========================
// LOGOUT
// =========================
function logout() {
  localStorage.removeItem("flipmine_logged");
  window.location.href = "index.html";
}

// =========================
// INICIALIZA
// =========================
document.addEventListener("DOMContentLoaded", () => {
  updateBalance();
});
