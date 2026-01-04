import express from 'express'; 
import notesRoutes from './routes/notesRoutes.js';
const app = express(); 
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config(); // Load environment variables from .env file

app.use(express.json()); //middleware to parse JSON request body
app.use(rateLimiter); //apply rate limiter middleware globally

app.use("/api/notes", notesRoutes);//fetching all notes routes from notesRoutes.js and add prefix /api/notes

const port = process.env.PORT || 5001;
connectDB().then(()=>{
    
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`); 
    })
}); //connect to database