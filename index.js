import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import purposeRoutes from "./routes/purpose.js"
import { updateAyuda } from "./controllers/users.js"

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/users", userRoutes)
app.use("/purposes", purposeRoutes)
// app.use("/updateAyuda", updateAyuda)

app.get("/", (req, res) => {
  res.send("Hello to QR-based System")
})

app.get("/favico.ico", (req, res) => {
  res.sendStatus(404)
})

// const CONNECTION_URL = "mongodb+srv://uname:pass@cluster0.qcuoe.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  })
  .catch((error) => console.log(error.message))

mongoose.set("useFindAndModify", false)
