import fs from'fs';
export default (req,res)=>{
 const p='data/users.json'; const u=JSON.parse(fs.readFileSync(p));
 const e=req.body.email; u[e].balance+=0.005; u[e].today+=0.005; u[e].total+=0.005;
 fs.writeFileSync(p,JSON.stringify(u,null,2)); res.json({ok:true});
}
