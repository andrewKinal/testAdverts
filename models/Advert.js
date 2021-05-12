const { model, Schema } = require('mongoose');

const schema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  photoLinks: [Schema.Types.String],
  price: {
    type: Schema.Types.Number,
    required: true,
  },
}, { collection: 'Advert' });

module.exports = model('Advert', schema);