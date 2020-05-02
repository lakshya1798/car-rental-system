import { Container, inject } from "inversify"
import { controller, httpPost } from "inversify-express-utils"
import * as express from "express"
import * as _ from "lodash"

export function BookingControllerFactory(kernel: Container) {
    @controller("/client")
    class BookingController {
        constructor() {
        }
        @httpPost("/quest")
        public async fulfilQuestReward(request: express.Request) {
            try {
                const {body} = request.body
            } catch (e) {
            }

        }
    }
    return BookingController
}
