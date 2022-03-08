const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("saket123")
})

app.listen(port,()=>{
    console.log(`App is loistening at the port: ${port}`)
})
