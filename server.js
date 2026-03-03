const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/approve",(req,res)=>{
console.log("Paiement approuvé :",req.body.paymentId);
res.send({result:"ok"});
});

app.post("/complete",(req,res)=>{
console.log("Paiement terminé :",req.body.paymentId);
res.send({result:"ok"});
});

app.listen(3000,()=>{
console.log("Serveur lancé");
});
