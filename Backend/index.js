const express = require("express");
const userRoute = require("./Routes/User")
const cors = require("cors");
const app = express();

app.use(cors({
     origin:"*"
}))
app.use(express.json());
app.use("/api/v1",userRoute)

app.get("/",(req,res) => { 
   return res.send("This is home page")
})

app.listen(4000,() => {
     console.log("your server is started")
})