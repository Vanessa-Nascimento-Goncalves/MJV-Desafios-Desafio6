import { Router } from 'express';
import healthRouter from './health.router';
import productIndex from './products.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', productIndex);

export default router;