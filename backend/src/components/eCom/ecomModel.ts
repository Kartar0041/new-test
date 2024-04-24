import mongoose from 'mongoose';

const ecommerce = new mongoose.Schema<any>({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
});


const ecom = mongoose.model<any, any>('products', ecommerce);

export default ecom;
