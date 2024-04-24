import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const coupon = new mongoose.Schema<any>({
    code: {
        type: String,
    },
    name: {
        type: String,
    },
    discount: {
        type: Number,
    },
    updatedOn: {
        type: Date,
        default: Date.now,
    },
});

coupon.plugin(aggregatePaginate); /**Added for pagination */

const   couponModel = mongoose.model<any, any>('coupon', coupon);

export default couponModel;
