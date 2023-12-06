const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { email: params.email }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
        res.json(foundUser);
      },

    async createUser({ body }, res) {
        const user = await User.create(body);
    
        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async login({ body }, res) {
        const user = await User.findOne({ email: body.email });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },

    async addCookie({ user, body }, res) {
        try {
            const updatedCart = await User.findOneAndUpdate(
                { _id: user.id },
                { $addToSet: { savedCookies: body }},
                { new: true, runValidators: true }
            );
            return res.json(updatedCart);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    async deleteCookie({ user, params }, res) {
        const updatedCart = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedCookies: { cookieId: params.cookieId }}},
            { new: true }
        );
        if (!updatedCart) {
            return res.status(404).json({ message: `Oh, sweetheart, there's no cookies in here!` });
        }
        return res.json(updatedCart);
    },
}