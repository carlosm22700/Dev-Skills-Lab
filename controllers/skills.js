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

function newSkill(req, res){
    res.render('skills/new')
}

function create(req, res) {
    console.log(req.body);
    skillModel.create({name: req.body.skill})
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    skillModel.deleteOne(req.params.id);
    res.redirect('/skills')
}
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}