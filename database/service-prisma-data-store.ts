import {PrismaClient, Service} from '@prisma/client';
const prisma = new PrismaClient();

export async function addServices(s:Service){
    const newService=await prisma.service.create({
        data:{
           id:s.id,
           name:s.name
        }
    })
    console.log("service added successfully",newService);
    return newService;
}

export async function getAllServices(){
    try {
        return await prisma.service.findMany();
    }catch (err){
        console.log("error getting Services data",err)
    }
}

export async function DeleteServices(id:number){
    try{
        const deleteService=await prisma.service.delete({
            where:{id:id}
        })
        console.log("service delete  Successfully")
        return deleteService
    }catch (err){
        console.log("service delete Unsuccessfully",err)
    }
}


