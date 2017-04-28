import Joi from 'joi';
import validate from '../utils/validate';
import * as bikeService from '../services/bikeService';

const SCHEMA = {
  manufacturer: Joi.string().label('manufacturer').max(30),
  model: Joi.string().label('model').max(30),
  horsepower: Joi.number().label('horsepower')
};

/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function bikeValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findBike(req, res, next) {
  return bikeService.getBike(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export {findBike, bikeValidator};
