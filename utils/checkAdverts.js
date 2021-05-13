const Advert = require('../models/Advert');

const advertExist = async (advertId) => {
  const advert = await Advert.findOne({_id: advertId});
  if(advert) {
    return true;
  }
  return false;
}

module.exports = {
  advertExist,
}