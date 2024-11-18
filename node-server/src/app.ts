import express from 'express'
import cors from 'cors';


const app = express()


app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));


app.use(express.json({
  limit: "16kb"
}))

app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))

app.use(express.static("public"))


import userRouter from "./routes/user.routes"
import testRouter from "./routes/test.routes"
app.use("/api/v1/test", testRouter);
app.use("/api/v1/user", userRouter);

export { app }
