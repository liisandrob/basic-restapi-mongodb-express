const mongoose = require('mongoose');

const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATA
} = process.env

const mongoURI = `mongodb://${ MONGO_USER ? `${MONGO_USER}:${MONGO_PASS}@` : ''}${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATA}`

module.exports.connect = () => mongoose.connect(mongoURI)
  .then(() => console.info(`Connection to MongoDB database "${MONGO_DATA}" successful`))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });