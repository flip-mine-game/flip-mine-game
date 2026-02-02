import fs from'fs';
export default (req,res)=>{
 const p='data/users.json'; const u=JSON.parse(fs.readFileSync(p));
 const {email,password}=req.body; u[email]={password,balance:0,today:0,total:0};
 fs.writeFileSync(p,JSON.stringify(u,null,2)); res.json({success:true});
}
