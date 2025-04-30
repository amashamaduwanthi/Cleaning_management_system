import { PrismaClient } from '@prisma/client';
import User from "../model/User";
const prisma = new PrismaClient();
export async function addNewUser(u:User){
    const newUser=await prisma.user.create({
        data:{
            id:u.id,
            username:u.userName,
            passwordHash:u.password
        }
    })
    console.log("user added successfully",newUser);
    return newUser;
}
