import express from 'express'
const router = express.Router();
import { fetch, fetchAll, send } from '../controllers/data'

router.post('/send', send);
router.get('/fetch', fetch);
router.get('/fetch-all', fetchAll)

export default router