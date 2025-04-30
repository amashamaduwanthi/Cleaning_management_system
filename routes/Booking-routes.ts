import express from 'express';
import {addBooking, DeleteBooking, getAllBookings, UpdateBooking} from "../database/booking-prisma-data-store";
import Booking from "../model/Booking";
const router = express.Router();

router.post('/add', async (req, res) => {
    console.log("Incoming booking data:", req.body);
    const booking: Booking = req.body;

    try {
        const addBookings = await addBooking(booking);
        res.json(addBookings);
    } catch (e) {
        console.error("Error Adding Booking:", e);
        res.status(400).send("Error Adding Booking");
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
router.delete('/delete/:id',async (req,res)=>{
    const id: number  = +req.params.id;
    console.log(id)
    try{
        const deleteBooking=await DeleteBooking(id);
        res.json(deleteBooking)
        
    }catch (err){
        console.log("Error deleting Booking",err)
    }
})
router.put('/update/:id',async (req,res)=>{
    const booking:Booking=req.body;
    const id: number  = +req.params.id;
    try {
        const updateBooking=await UpdateBooking(id,booking);
        res.send(updateBooking)
    }catch (err){
        console.log("Error updating Booking",err)
        res.status(400)
    }
})
export default router;
