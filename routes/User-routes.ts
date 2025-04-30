import {Service} from "@prisma/client";
import {addServices} from "../database/service-prisma-data-store";
import router from "./Service-routes";
import {addNewUser} from "../database/User-prisma-data-store";
import User from "../model/User";

router.post('/add', async (req, res) => {
    const body = req.body;
    const user:User=req.body;
    try {
        const addUser = await addNewUser(user);
        res.json(addUser)
    }catch (e){
        res.status(400).send("Error Adding User")
    }
});