import Boom from 'boom';
import Bike from '../models/bike';

/**
 * Get all users.
 *
 * @return {Promise}
 */
export async function getAllBikes() {
  return await Bike.fetchAll();
}

/**
 * Get a user.
 *
 * @param  {number|string}  id
 * @return {Promise}
 */
export async function getBike(id) {
  return await new Bike({id}).fetch()
    .then(bike => {
      if (!bike) {
        throw new Boom.notFound('Bike not found');
      }

      return bike;
    });
}

/**
 * Create new user.
 *
 * @param  {object}  user
 * @return {Promise}
 */
export async function createBike(bike) {
  return await new Bike({manufacturer: bike.manufacturer, model: bike.model, horsepower: bike.horsepower}).save().then(bike => bike.refresh());
}

/**
 * Update a user.
 *
 * @param  {number|string}  id
 * @param  {object}         user
 * @return {Promise}
 */
export async function updateBike(id, bike) {
  return await new Bike({id}).save({manufacturer: bike.manufacturer, model: bike.model, horsepower: bike.horsepower}).then(bike => bike.refresh());
}

/**
 * Delete a user.
 *
 * @param  {number|string}  id
 * @return {Promise}
 */
export async function deleteBike(id) {
  return await new Bike({id}).fetch().then(bike => bike.destroy());
}
