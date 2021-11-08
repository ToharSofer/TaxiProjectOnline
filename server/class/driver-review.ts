import { DriverReviewService } from "../services/driver-review.service";

export class DriverReview
{
    constructor
    (
    public reviewCode?:number,
    public review?:string,      
    public driverReviewCode?:number,
    public userId?:number,

    ){}
}