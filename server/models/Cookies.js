const { Schema, Types } = require('mongoose');

const cookieSchema = new Schema({
    cookieId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    cookieName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: true, 
      min: 0,
    }
  });
   
  
module.exports = cookieSchema; 