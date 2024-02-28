import express from "express"
import morgan from "morgan";
import path from "path";
import cors from "cors";
import './src/database'

import routerDatos from "./src/routes/datos.routes";

const app = express();
app.set('port',process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log(`listening on port ${app.get('port')}`);
})

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'))

app.use('/', routerDatos);