import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    imgSrc: {
        type: String,
        required: true,
    },
    filekey: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = models.products || model("products", productSchema);

export default Product;