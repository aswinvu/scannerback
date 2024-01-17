const express=require("express")
const app=express();
const cors = require('cors');


const AdminRouter = require('./routes/adminRouter')


app.use(cors());
app.use(express.json())


app.use('./api/admin',AdminRouter)


app.listen(3005,()=>

    console.log("connected")
)