import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

import dalleRoutes from './routes/dalleRoutes.js';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/dalle', dalleRoutes)
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/auth', authRoutes)


app.get('/', async (req, res) => {
    res.send("Welcome to Dave Backend!")
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        console.log("Connected to mongodb server...");
        app.listen(9080, () => console.log('Server has started on port http://localhost:9080'));
        console.log("REST api is Active...")
    } catch (error) {
        console.log(error);
    }
    
}

startServer();