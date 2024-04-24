import mongoose from 'mongoose';

const cart = new mongoose.Schema<any>({
    pid: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,

    },
    updatedOn: {
        type: Date,
        default: Date.now,
    },
});


const   cartModel = mongoose.model<any, any>('cart', cart);

export default cartModel;
