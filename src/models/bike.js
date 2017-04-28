import bookshelf from '../db';

const TABLE_NAME = 'bike';

let Bike = bookshelf.Model.extend({
  tableName: TABLE_NAME,
  hasTimestamps: true
});

export default Bike;
