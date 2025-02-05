const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, 'price is required!'],
    },
    feature: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo'],
            message: `This company product is not supported! `,
        }
    }
})

module.exports = mongoose.model('Product', productSchema);