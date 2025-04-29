import express from 'express';
import {Service} from "@prisma/client";
import {addServices, DeleteServices, getAllServices} from "../database/service-prisma-data-store";
const router = express.Router();

router.post('/add', async (req, res) => {
    const body = req.body;
    const service:Service=req.body;
    try {
        const addService = await addServices(service);
        res.json(addService)
    }catch (e){
        res.status(400).send("Error Adding Services")
    }
});
router.get('/view',async (req,res)=>{
    try {
        const services=await getAllServices();
        res.json(services);
    }catch (err){
        console.log("error getting services",err)
    }
})
router.delete('/delete/:id',async (req,res)=>{
    const id: number  = +req.params.id;
    try{
        const deleteService=await DeleteServices(id);
        res.json(deleteService)
    }catch (err){
        console.log("Error deleting Service",err)
    }
})

export default router;
