import express, { Request, Response } from "express"
import * as BookingController from "./controllers/BookingController"
// Our Express APP config
const app = express()
app.use(express.json())
app.set("port", process.env.PORT || 3000)

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))
app.get("/cars", BookingController.allCars)
app.get("/car/:id", BookingController.getCar)
app.post("/car", BookingController.addCar)
app.put("/car/:id", BookingController.updateCar)
app.delete("/car/:id", BookingController.deleteCar)

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"))
})
