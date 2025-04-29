import express from 'express';
import {addBooking, getAllBookings} from "../database/booking-prisma-data-store";
import Booking from "../model/Booking";
const router = express.Router();



router.post('/add', async (req, res) => {
    const body = req.body;
    const booking:Booking=req.body;
    try {
        const addBookings = await addBooking(booking);
        res.json(addBookings)
    }catch (e){

        res.status(400).send("Error Adding Books")
    }

});
router.get('/view',async (req,res)=>{
    try {
        const bookings=await getAllBookings();
        res.json(bookings);
    }catch (err){
        console.log("error getting bookings",err)
    }

})


export default router;
