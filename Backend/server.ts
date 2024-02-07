import express from 'express'
import cores from 'cores';

const app=express();
app.use(cores())

app.get('/',(req,res)=>{
    res.send('this is from backend')
})

app.listen((5000),()=>{
    console.log('backend is listing on port 5000')
})
