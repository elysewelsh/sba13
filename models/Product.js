import mongoose from 'mongoose'

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
    price: {
    type: Number,
    required: [true, 'Product price is required'],
    minimum: 0.01,
    multipleOf: 0.01
  },
    category: {
    type: String,
    required: [true, 'Product category is required']
  },
    inStock: {
    type: Boolean,
    default: true
  },
    tags: {
    type: Array,
    items: {
        type: String
    }
    },
    createdAt: {
    type: Date,
    default: new Date()
  }
})
const Product = mongoose.model('Product', productSchema);

export default Product