import mongoose = require("mongoose")

const uri: string = "mongodb://127.0.0.1:27017/local"

mongoose.connect(uri, (err: any) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("Successfully Connected!")
    }
})

export interface Bookings {
    id: String,
    name: String,
    phone: String,
    startDate: Date,
    endDate: Date
}

export interface ICar extends mongoose.Document {
    vehicleNo: string,
    modelName: string,
    seatingCapacity: number,
    rentPerDay: number,
    bookingStatus: string,
    bookingInfo: Bookings[]
}

const BookingSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
})

const CarSchema = new mongoose.Schema({
    vehicleNo: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true,
    },
    seatingCapacity: {
        type: Number,
        required: true,
    },
    rentPerDay: {
        type: Number,
        required: true,
    },
    bookingStatus: {
        type: String,
        required: true
    },
    bookingInfo: [{
        type: BookingSchema,
        required: false
    }]
})

const Car = mongoose.model<ICar>("Car", CarSchema)

export default Car
