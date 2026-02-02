import fs from'fs';
export default (req,res)=>{
 const p='data/users.json'; const u=JSON.parse(fs.readFileSync(p));
 const e=req.body.email;
 if(u[e].balance<0.30) return res.json({message:'Mínimo US$0,30'});
 // AQUI entra FaucetPay (Polygon)
 u[e].balance=0; u[e].today=0;
 fs.writeFileSync(p,JSON.stringify(u,null,2));
 res.json({message:'Pedido enviado'});
}
