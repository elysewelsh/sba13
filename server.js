import connectDB from './db/connection.js'
import express from 'express'
import bookRoutes from './routes/bookRoutes.js'

const app = express()

const port = 3000;

connectDB();

app.use(express.json());

app.use('/api/books', bookRoutes);

app.listen(port, () => {
    console.log(`connected to port ${port}`)
})