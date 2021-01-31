import express from 'express'
import path from 'path';
import {addData} from './bd.js';
import {changeData} from './bd.js';
import {getData} from './bd.js';

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/getFiles',(req,res)=>{
	res.send(getData());
});

app.post('/addFile',async (req,res)=>{
	addData(req.body);
	res.sendStatus(201);
});

app.post('/updateFile',async (req,res)=>{
	changeData(req.body);
	res.sendStatus(201);
});

app.listen(4000, ()=> {
});
