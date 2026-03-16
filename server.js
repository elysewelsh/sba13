import connectDB from './config/connection.js'
import express from 'express'
import productRoutes from './routes/productRoutes.js'

const app = express()

export const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})