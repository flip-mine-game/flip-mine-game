const emailKey='fm_email';
function login(){
 fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({email:email.value,password:pass.value})})
 .then(r=>r.json()).then(d=>{if(d.success){localStorage.setItem(emailKey,email.value);location='dashboard.html'}else alert('erro')})
}
function register(){
 fetch('/api/register',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({email:email.value,password:pass.value})})
 .then(()=>location='login.html')
}
function ptc(){
 fetch('/api/ptc',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({email:localStorage.getItem(emailKey)})})
 .then(()=>loadStats())
}
function loadStats(){
 fetch('/api/stats',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({email:localStorage.getItem(emailKey)})})
 .then(r=>r.json()).then(s=>{
  saldo.innerText='$'+s.balance.toFixed(3)
  hoje.innerText='$'+s.today.toFixed(3)
  total.innerText='$'+s.total.toFixed(3)
 })
}
function withdraw(){
 fetch('/api/withdraw',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({email:localStorage.getItem(emailKey)})})
 .then(r=>r.json()).then(d=>alert(d.message||'ok'))
}
