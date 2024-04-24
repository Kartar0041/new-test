import { Router } from 'express';
import eController from './ecomController';
import 'express-async-errors';

const route = Router();

route.get('/getProducts', eController.getProducts);
route.post('/addToCart', eController.addProductInCart);
route.post('/removeFromCart', eController.removeProductInCart);
route.get('/getCart', eController.getroductInCart);
route.get('/getCoupon', eController.getCoupon);


export default route;
