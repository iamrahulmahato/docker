import express from 'express';
import { PrismaClient } from './generated/prisma';



const app = express();

const prismaclient = new PrismaClient();

app.get('/',async (req,res)=>{
    const data  = await prismaclient.user.findMany()

    res.json({
        data
    })
})

app.post('/',async (req,res)=>{

     await prismaclient.user.create({
        data : {
            username : Math.random().toString(),
            password: Math.random().toString(),
        }
    })

    res.json({
        "data" : "post api endpoint"
    })

})


app.listen(3000)