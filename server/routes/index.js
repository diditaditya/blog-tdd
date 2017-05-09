const express = require('express');
const router = express.Router();
const BlogPostControl = require('../controllers/blog');
const Validator = require('../helpers/validator');

router.get('/', (req, res) => {
  res.send('Up and Running');
});

router.get('/api/posts', BlogPostControl.showAll);
router.get('/api/posts/:id', BlogPostControl.showOne);
router.post('/api/posts', Validator.isAuthorValid, BlogPostControl.add);
router.put('/api/posts/:id', Validator.isAuthorValid, BlogPostControl.update);
router.delete('/api/posts/:id', BlogPostControl.delete);

module.exports = router;
