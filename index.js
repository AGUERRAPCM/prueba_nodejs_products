import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'

import router from './routes/routes.js';


const app = express();
dotenv.config();
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use("/api/products", router);

// app.use((req,res, next)=>{
//     console.log("Middleware de Ejemplo 1");
//     next();
// });

app.get('/', (req, res)=>{
    res.send('Hola Mundo.!!');
});




const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
// app.listen(PORT, ()=>{
//     connectDB(MONGO_URI);
//     console.log('MongoDB conectado..!!');
//     console.log(`Servidor Iniciado en 'http://localhost:${PORT}'`);
// });

const start = async  () =>{
    try{
        await connectDB(MONGO_URI);
        console.log('MongoDB conectado..!!');
        app.listen(PORT, ()=>{          
            console.log(`Servidor Iniciado en 'http://localhost:${PORT}'`);
        });
    }catch(error){
        console.log(error);
    }
}

start();