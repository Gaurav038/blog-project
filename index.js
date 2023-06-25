require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const dataRoute = require("./routes/data")

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"))
}
// database connection
mongoose.set("strictQuery", false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("mongoDB Connected")
    } catch (error) {
        throw error;
    }
}
// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/signup", userRoutes);
app.use("/api/login", authRoutes);
app.use('/data', dataRoute)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    connect()
    console.log(`Listening on port ${port}...`)
    }
);
