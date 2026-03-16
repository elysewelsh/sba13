import express from 'express'
import Product from '../models/Product.js'

const router = express.Router();

router.post('/', async (req, res) => {
try{
    const newProduct = await Product.create(req.body);
    console.log(newProduct);
    res.status(201).json(newProduct);
}
catch(error) {
    res.status(400).json( {message: error.message} )
}
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const productFind = await Product
        .find({ 
            _id: { $eq: id }
        })
        if (!productFind) {
            return res.status(404).json({message: `not able to find ProductID: ${id}`})
        }
        console.log(productFind);
        res.status(200).json(productFind)
    }
    catch(error) {
        res.status(400).json( {message: error.message} )
    }
});

router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {returnDocument: 'after'});
        if (!updatedProduct) {
            return res.status(404).json({message: `not able to find Product ID: ${id}`})
        }
        console.log(updatedProduct);
        res.status(201).json(updatedProduct)
    }
    catch(error) {
        res.status(400).json( {message: error.message} )
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) {
            return res.status(404).json({message: `not able to find Product ID: ${id}`})
        }
        res.status(200).json({ message: `Deleted Product ID: ${id} successfully`})
    }
    catch(error) {
        res.send(400).json({ message: error.message})
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        console.log(products);
        res.status(200).json(products)
    }
    catch(error) {
        res.status(400).json( {message: error.message} )
    }
});

// category: Filter products by a specific category.
// minPrice: Filter products with a price greater than or equal to this value.
// maxPrice: Filter products with a price less than or equal to this value.
// sortBy: Sort results. For example, price_asc for ascending price or price_desc for descending price.
// page & limit: For pagination (defaulting to page 1, limit 10).

export default router