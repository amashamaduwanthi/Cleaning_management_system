import express from 'express';
import BookingRoutes from "./routes/Booking-routes";
const app = express();
import cors from 'cors';
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/booking',BookingRoutes)

app.listen(3005, (err=>{
    console.log("Server running on port 3002");
}));