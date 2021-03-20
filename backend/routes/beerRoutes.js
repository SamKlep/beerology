import express from 'express'
const router = express.Router()
import {
  getBeers,
  getBeerById,
  deleteBeer,
} from '../controllers/beerController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
router.route('/').get(getBeers)

router.route('/:id').get(getBeerById).delete(protect, admin, deleteBeer)

export default router
