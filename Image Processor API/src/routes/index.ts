import express from 'express';
import imageProcessor from '../middleware/image-processor'

const routes = express.Router();
routes.get('/',(req,res)=>{
  res.send("Server is working");
});
routes.get('/api/image',imageProcessor);

export default routes;
