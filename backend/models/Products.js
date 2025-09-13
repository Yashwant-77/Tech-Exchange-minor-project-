import mongoose, { Schema } from "mongoose";


const ProductsSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },


})