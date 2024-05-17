require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");           
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router")
const connectDb = require("./utils/db");        
const errorMiddleware = require('./middlewares/error-middleware'); 
app.use(express.json());   // when you used it, it means you're accepting JSON payloads

const coreOptions = {
    origin: "http://localhost:5173", // Remove "/register" from the origin
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}
 
app.use(cors(coreOptions));
  
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
 
// define admin route

app.use("/api/admin",adminRoute);


app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => { 
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`); 
    });
});
