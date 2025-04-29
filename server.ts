import express from 'express';
const app = express();

app.use(express.json())
app.listen(3005, (err=>{
    console.log("Server running on port 3002");
}));