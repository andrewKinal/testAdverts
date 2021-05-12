const Advert = require('../models/Advert');

const getAllAdverts = async (req, res) => {
  try {
    const data = await Advert.find({});
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
  try {
    const { id } = req.params;
    const {fields} = req.query;
    let data;
    if(fields === 'true') {
      data = await Advert.findById({ _id: id });
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