import ecomodel from "./ecomModel"
import carts from "./cartModel";
import couponModel from "./couponModel";
import { Types } from "mongoose"; // Import Types from mongoose


class eComService {


    public async fetchProducts() {
        try {
            return await ecomodel.find({})

        } catch (error: any) {
            throw error.message
        }
    }

    public async addProductsCarts(id: any) {
        try {
            let product = await ecomodel.findOne({
                _id: new Types.ObjectId(id)
            }).select("-updatedOn -_id")
            let data: any = { ...product._doc, pid: id }
            let cartPrdct = await carts.findOne({ pid: id })

            if (!cartPrdct) {
                await carts.create(data)
                return "product Added Successfully"
            }
            else {
                return "product already added"
            }
        } catch (error: any) {
            throw error.message
        }
    }

    public async removeProductsCarts(id: any) {
        try {
            console.log('id :>> ', id);
            await carts.deleteOne({ pid: id })
        } catch (error) {
            throw error
        }
    }


    public async getProductsCarts() {
        let dbData = await carts.find({})
        console.log('dbData :>> ', dbData);
        let totalAmount = 0
        for (const data of dbData) {
            totalAmount += data.price
        }

        dbData

        return [dbData, totalAmount]
    }


    public async getCounpons() {
        return await couponModel.find({})
    }

}

export default new eComService();
