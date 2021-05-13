const Advert = require('../models/Advert');
const { advertExist } = require('../utils/checkAdverts');

const getAllAdverts = async (req, res) => {
  const limit = 10;
  const { page = 1, sorting = 'createdUp' } = req.query;
  try {
    let data;
    const baseQuery = Advert.find({}, { title: 'title', price: 'price', photoLinks: { $slice: 1 } });
    
    switch(sorting) {
      case 'createdDown':
        data = await baseQuery
          .sort({createdAt: -1})
          .limit(limit * 1)
          .skip((page - 1) * limit);
        break;
      case 'priceUp':
        data = await baseQuery
          .sort({price: 1})
          .limit(limit * 1)
          .skip((page - 1) * limit);
        break;
      case 'priceDown':
        data = await baseQuery
          .sort({price: -1})
          .limit(limit * 1)
          .skip((page - 1) * limit);
        break;
      default: 
        data = await baseQuery
          .limit(limit * 1)
          .skip((page - 1) * limit);
        break;
    }
    
    res.status(200).json({
      status: 'ok',
      data
    });
  } catch(err) {
    res.status(500).json({
      status: 'error'
    });
  }
}
const getAdvert = async (req, res) => {
  const { id } = req.params;
  const {fields} = req.query;
  
  const check = await advertExist(id);
  if(!check) {
    return res.status(400).json({
      status: 'error',
      message: 'Advert does not exist',
    });
  }

  try {
    
    let data;
    if(fields === 'true') {
      data = await Advert.findById({ _id: id }, { title: 'title', description: 'description', price: 'price', photoLinks: 'photoLinks' });
    } else {
      data = await Advert.findById({ _id: id }, { title: 'title', price: 'price', photoLinks: { $slice: 1 } });
    }
    
    res.status(200).json({
      status: 'ok',
      data
    });
  } catch(err) {
    console.log(err)
    res.status(500).json({
      status: 'error'
    });
  }
}
const createAdvert = async (req, res) => {
  const { title, description, photoLinks, price } = req.body;
  try {
    const newAdvert = new Advert({
      title,
      description,
      photoLinks,
      price,
    });
    const data = await newAdvert.save();
    res.status(201).json({
      status: 'ok',
      data: data._id,
    })
  } catch(err) {
    res.status(500).json({
      status: 'error'
    });
  }
}

module.exports = {
  getAllAdverts,
  getAdvert,
  createAdvert,
}