const SocialNetwork = require('../models/SocialNetwork');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        
        const { user_id } = req.params;
        const { username, socialnetwork } = req.body;

        const sn = await SocialNetwork.create({username, socialnetwork, user_id});

        return res.json(sn)
    },

    async index(req, res){
        
        const socialNetworks = await SocialNetwork.findAll();

        return res.json(socialNetworks)

    },
}