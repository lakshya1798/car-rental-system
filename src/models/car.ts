export interface Booking {
    id: string
    name: string
    phone: string
    startDate: Date
    endDate: Date
}

export interface Car {
    vehicleNo: string
    model: string
    seatingCapacity: number
    rentPerDay: number
    bookingStatus: string
    bookingInfo?: Booking[]
}
