import {Router} from 'express';
import HttpStatus from 'http-status-codes';
import * as bikeService from '../services/bikeService';
import {findBike, bikeValidator} from '../validators/bikeValidator';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', (req, res, next) => {
  bikeService.getAllBikes()
    .then(data => res.json({data}))
    .catch(err => next(err));
});


/**
 * GET /api/users/:id
 */
router.get('/:id', (req, res, next) => {
  bikeService.getBike(req.params.id)
    .then(data => res.json({data}))
    .catch(err => next(err));
});

/**
 * POST /api/users
 */
router.post('/', bikeValidator, (req, res, next) => {
  bikeService.createBike(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({data}))
    .catch(err => next(err));
});

/**
 * PUT /api/users/:id
 */
router.put('/:id', findBike, bikeValidator, (req, res, next) => {
  bikeService.updateBike(req.params.id, req.body)
    .then(data => res.json({data}))
    .catch(err => next(err));
});

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findBike, (req, res, next) => {
  bikeService.deleteBike(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({data}))
    .catch(err => next(err));
});

export default router;
