const db = require('../models');

const index = (req, res) => {
  db.Shoe.find({}, (err, foundShoe) => {
    if (err) console.log('Error in shoe#index:', err);
    res.json(foundShoe);
  });
}

const show = (req, res) => {
    db.Shoe.findById(req.params.id, (err, foundShoe) => {
        if (err) console.log('Error in shoe#show:', err);
        res.json(foundShoe);
    });
};

const create = (req, res) => {
    db.Shoe.create(req.body, (err, savedShoe) => {
        if (err) console.log('Error in shoe#create:', err);
        res.json(savedShoe);
    });
};

const update = (req, res) => {
    db.Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExample) => {
        if (err) console.log('Error in shoe#update:', err);
        res.json(updatedShoe);
    });
};

const destroy = (req, res) => {
    db.Shoe.findByIdAndDelete(req.params.id, (err, deletedShoe) => {
        if (err) console.log('Error in shoe#destroy:', err);
          res.sendStatus(200);
          console.log(deletedShoe);
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};