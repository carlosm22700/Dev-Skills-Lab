const skills = [
  { 
    id: 1,
    name: 'HTML', 
    description: 'The standard markup language for web documents.',
    level: 'Intermediate'
  },
  {
    id: 2,
    name: 'CSS',
    description: 'A style sheet language used for describing the presentation of web documents.',
    level: 'Intermediate'
  },
  {
    id: 3,
    name: 'JavaScript',
    description: 'A high-level programming language used to create interactive web pages.',
    level: 'Beginner'
  },
  {
    id: 4,
    name: 'Express',
    description: 'A fast and minimalist web framework used to build web applications and APIs with Node.js.',
    level: 'Beginner'
  },
  {
  id: 5,
  name: 'Node.js',
  description: 'A back-end JavaScript runtime environment used to execute JavaScript code outside of a web browser.',
  level: 'Beginner'
  }
];
  
  
function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(s => s.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}
module.exports = {
  getAll,
  getOne,
  create
}