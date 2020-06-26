const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router connected');


router.get('/', homeController.accessUser);
router.post('/create-task', homeController.createUser);
router.get('/delete-task', homeController.deleteUser);



module.exports = router;