const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getDetailUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/user');

//CRUD
router.get('/', getAllUsers);
router.get('/:id', getDetailUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
