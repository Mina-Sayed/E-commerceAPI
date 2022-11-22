const User = require('../Models/User');

// create a new user
exports.create = async (req, res) => {

    try {
        
        const user = new User(req.body);
        
        await user.save();
        
        res.status(201).json(user);
        
    } catch (error) {
        
        res.status(400).json(error);
        
    }
};

// get all users
exports.findAll = async (req, res) => {

    try {
        
        const users = await User.find();
        
        res.status(200).json(users);
        
    } catch (error) {
        
        res.status(500).json(error);
        
    }
}


// get a user
exports.findOne = async (req, res) => { 

    try {
        
        const user = await User.findById(req.params.id);
        
        res.status(200).json(user);
        
    } catch (error) {
        
        res.status(500).json(error);
        
    }


}

// update a user

exports.update = async (req, res) => { 
    
        try {
            
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

            res.status(200).json(user);

        } catch (error) {
            
            res.status(500).json(error);
            
        }
}

// delete a user

exports.delete = async (req, res) => {  
        
        try {
            
            const user = await User.findByIdAndDelete(req.params.id);

            res.status(200).json(user);

        } catch (error) {
                
                res.status(500).json(error);
                
    }   
    
}