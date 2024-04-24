import ecomService from "./ecomService";
import { Request, Response, NextFunction } from 'express';


class ECOM {

    public async getProducts(req: Request, res: Response) {
        try {
            let data = await ecomService.fetchProducts()
            console.log('data :>> ', data);
            return res.status(200).send(data);
        } catch (error) {
            console.error('checkAdmin error -->', error);
            res.status(404).send();
        }
    }

    public async addProductInCart(req: Request, res: Response) {
        try {
            let data = await ecomService.addProductsCarts(req.body.id)
            return res.status(200).send(data);
        } catch (error: any) {
            res.status(404).send(error.message);
        }
    }

    public async removeProductInCart(req: Request, res: Response) {
        try {
            let data = await ecomService.removeProductsCarts(req.body.id)
            return res.status(200).send("Product removed Successfully");
        } catch (error: any) {
            res.status(404).send(error.message);
        }
    }


    public async getroductInCart(req: Request, res: Response) {
        try {
            let data:any = await ecomService.getProductsCarts()

            return res.status(200).send(data);
        } catch (error) {
            res.status(404).send("Something went wrong");
        }
    }

    public async getCoupon(req: Request, res: Response) {
        try {
            let data:any = await ecomService.getCounpons()

            return res.status(200).send(data);
        } catch (error) {
            res.status(404).send("Something went wrong");
        }
    }

}

export default new ECOM();
