// src/data/booking-prisma-data-store.ts
import { PrismaClient } from '@prisma/client';
import express from "express";
import Booking from "../model/Booking";
const prisma = new PrismaClient();

export async function addBooking(b:Booking){
    const newBooking=await prisma.booking.create({
        data:{
            customerName:b.customerName,
            address:b.address,
            dateTime:b.dateTime,
            serviceId:b.serviceId,
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