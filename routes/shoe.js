const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.shoe.index);
router.get('/:id', ctrl.shoe.show);
router.post('/', ctrl.shoe.create);
router.put('/:id', ctrl.shoe.update);
router.delete('/:id', ctrl.shoe.destroy);

// exports
module.exports = router;