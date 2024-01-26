const https=require("node:http");
const server=https.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello Lakshman This is your Website");
});
const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>console.log("Server is Running on port 3000"));
