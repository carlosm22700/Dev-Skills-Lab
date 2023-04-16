var express = require('express');
var router = express.Router();

//require controller that exports skills Crud functions
var skillsController = require('../controllers/skills')

// All actual paths start with '/skills'

//get /skills
router.get('/', skillsController.index);
//GET /skills/:id = show route - see one instance of a todo item on its own page
//Note: URL parameters are used to insert sppecific details about a resource we need in the request
router.get('/:id', skillsController.show);

module.exports = router;
