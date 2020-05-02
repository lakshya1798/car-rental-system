import { Request, Response } from "express"
import Car from "../models/car"
export let allCars = (req: Request, res: Response) => {
    let cars = Car.find((err: any, cars: any) => {
        if (err) {
            res.send("Error!")
        } else {
            res.send(cars)
        }
    })
}

export let getCar = (req: Request, res: Response) => {
    let car = Car.find({vehicleNo: req.params.id}, (err: any, car: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(car)
        }
    })
}

export let deleteCar = (req: Request, res: Response) => {
    let car = Car.deleteOne({ vehicleNo: req.params.id }, (err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send("Successfully Deleted Car")
        }
    })
}

export let updateCar = (req: Request, res: Response) => {
    console.log(req.body)
    let car = Car.findOneAndUpdate(
        {vehicleNo: req.params.id},
        req.body,
        (err: any, car: any) => {
            if (err) {
                res.send(err)
            } else {
                res.send("Successfully updated car!")
            }
        }
    )
}

export let addCar = (req: Request, res: Response) => {
    let car = new Car(req.body)

    car.save((err: any) => {
        if (err) {
            res.send(err)
        } else {
            res.send(car)
        }
    })
}
/*import { Container, inject } from "inversify"
import { controller, httpPost } from "inversify-express-utils"
import * as express from "express"
import * as mongoose from "mongoose"
import { Car } from "../models/car"
const url = "mongodb://localhost:27017/"
const carSchema = new mongoose.Schema(Car)
const CarObj = mongoose.model("CarObj", carSchema)
export function CaringControllerFactory(kernel: Container) {
    @controller("/car")
    class CaringController {
        constructor() {
        }
        @httpPost("/add")
        public async addNewCar(request: express.Request): Promise< {success: boolean} > {
            const myData = new CarObj(request.body)
            const result = myData.save()
                .then(item => {
                    return {success: true}
                })
                .catch(err => {
                    return { success: false}
                })
            return result
        }
        @httpPost("/car")
        public async carSlot(request: express.Request) {
            const data = request.body
            const startDate = data.startDate
            const endDate = data.endDate
            const vehicleNo = data.vehicle

        }
    }
    return CaringController
}*/
