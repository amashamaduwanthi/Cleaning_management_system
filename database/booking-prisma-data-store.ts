import { PrismaClient } from '@prisma/client';
import Booking from "../model/Booking";
const prisma = new PrismaClient();

export async function addBooking(b:Booking){
    const newBooking=await prisma.booking.create({
        data:{
            customerName:b.customerName,
            address:b.address,
            dateTime:b.dateTime,
            serviceType:b.serviceType,
            userId:b.userId
        }
    })
    console.log("booking added successfully",newBooking);
    return newBooking;
}

export async function getAllBookings(){
    try {
        return await prisma.booking.findMany();
    }catch (err){
        console.log("error getting Booking data",err)
    }
}

export async function DeleteBooking(id:number){
    try{
        const deleteBooking=await prisma.booking.delete({
            where:{id:id}
        })
        console.log("Booking delete  Successfully")
        return deleteBooking
    }catch (err){
        console.log("Booking delete Unsuccessfully",err)
    }
}

export async function UpdateBooking(id:number,b:Booking){
    try {
        const updateBooking=await prisma.booking.update({
            where:{id:id},
            data:{
               customerName:b.customerName,
               address:b.address,
                dateTime:b.dateTime,
                serviceType:b.serviceType,
                userId:b.userId
            }
        })
        console.log("Booking update successfully")
        return updateBooking
    }catch (err){
        console.log("Booking Update unsuccessfully",err)
    }
}

