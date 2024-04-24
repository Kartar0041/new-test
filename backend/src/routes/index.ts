import { Router } from 'express';
import eComRoute from '../components/eCom/ecomRoute';
const route = Router();

route.use('/ecommerce', eComRoute)

export default route;
