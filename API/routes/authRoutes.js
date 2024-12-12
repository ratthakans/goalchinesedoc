const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticate, authorizeRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example protected route
router.get('/admin', authenticate, authorizeRole(['admin']), (req, res) => {
    res.json({ message: 'Welcome Admin!' });
});

module.exports = router;
