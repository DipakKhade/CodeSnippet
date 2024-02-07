// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.get('/',(req,res)=>{
    res.send('this is from backend')
})
app.listen(PORT, () => {
    console.log(`backend is listening on port ${PORT}`);
});
