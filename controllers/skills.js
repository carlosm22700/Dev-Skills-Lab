const skillModel = require('../models/skill');

function index(req, res){
    res.render('skills/index', {
        allSkills: skillModel.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        foundSkill: skillModel.getOne(req.params.id)
    });
}
module.exports = {
    index,
    show
}