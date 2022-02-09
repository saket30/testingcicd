const express = require("express")
const app = express()
const port = 8080
app.get('/',(req,res)=>{
    res.send("hii")
})

app.listen(port,()=>{
    console.log(`App is loistening at the port: ${port}`)
})
