let saldo = 0;

function entrar() {
  window.location.href = "dashboard.html";
}

function claim() {
  saldo += 0.01;
  alert("Você ganhou FLIP fake!");
}

function ptc() {
  saldo += 0.02;
  alert("Anúncio fake assistido!");
}
