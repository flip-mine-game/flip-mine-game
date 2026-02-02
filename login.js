import fs from'fs';
export default (req,res)=>{
 const u=JSON.parse(fs.readFileSync('data/users.json'));
 const {email,password}=req.body;
 res.json({success: u[email]&&u[email].password===password});
}
