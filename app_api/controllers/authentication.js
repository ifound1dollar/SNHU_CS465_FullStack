const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const register = async (req, res) => {
    //If all fields not filled out, return error code 400.
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'All fields required' });
    }

    //Create new user with filled-out form data.
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    const token = user.generateJwt();

    try {
        //Attempt to save the new user, returning status code 200 and the generated token as JSON.
        const q = await user.save();
        res.status(200).json({ token });
    } catch (err) {
        //If fails, log error and return status code 400 with error as JSON.
        console.log(err);
        res.status(400).json(err);
    }
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'All fields required' });
    }

    passport.authenticate('local', (err, user, info) => {
        //If error, log error info and return status 404 with error as JSON.
        if (err) {
            console.log(err);
            return res.status(404).json(err);
        }

        if (user) {
            //If valid user, generate token and return status code 200 with token as JSON.
            const token = user.generateJwt();
            res.status(200).json({ token });
        } else {
            //Else if invalid, return status code 401 with information as JSON.
            res.status(401).json(info);
        }
    })(req, res);
};

module.exports = {
    register,
    login
}