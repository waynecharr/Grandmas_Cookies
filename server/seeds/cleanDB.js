const models = require('../models');
const db = require('../config/connection');

module.exports = async (collectionName) => {
  try {
    const collections = await db.db.listCollections({ name: collectionName }).toArray();

    if (collections.length > 0) {
      await db.db.dropCollection(collectionName);
      console.log(`Collection ${collectionName} cleaned successfully.`);
    }
  } catch (err) {
    console.error(`Error cleaning collection ${collectionName}: ${err.message}`);
    throw err;
  }
};
