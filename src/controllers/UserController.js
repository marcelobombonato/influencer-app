const User = require('../models/User');
const SocialNetwork = require('../models/SocialNetwork');
const { QueryTypes } = require('sequelize');
const Joi = require('joi');

module.exports = {

    async teste(req, res){
        return res.json({message:'Server is Up'})
    },

    async store(req, res){

        let {error} = validationError(req.body);

        if(error){
            return res.status(400).json({"error" : error.details[0].message});
        }

        const { name, email, description, birth, password, username, socialnetworks } = req.body;

        if(await isUsernameValid(username)){
            const userObj = await User.create({ name, email, description, birth, password, username });
            return res.json(userObj);
        } else {
            return res.status(400).json({ message:"User already exists!"});
        }
    },

    async index(req, res){
        
        const users = await User.findAll();

        return res.json(users)

    },
}

async function isUsernameValid(username){
    let user =  await User.sequelize.query('SELECT * FROM users where LOWER(username) LIKE LOWER(\''+ username +'\')', { raw: true, type: QueryTypes.SELECT })==0 ? true : false;
    return user;
}

function validationError(message){
    //regex: deve conter no mínimo 8 caracteres, 1 letra e 1 número.
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/ ;
    let Schema = Joi.object({
        'username': Joi.string().max(14, 'utf8').required(),
        'name': Joi.string().max(60, 'utf8').required(),
        'email': Joi.string().max(60, 'utf8').email({ tlds: { allow: false } }).required(),
        'description': Joi.string().max(80, 'utf8').required(),
        'password': Joi.string().regex(pattern).required(),
        'birth': Joi.date().required()
    });
    return Schema.validate(message);
}