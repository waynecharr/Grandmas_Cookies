const { User, Cookies } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// May not use this
// const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              data = await User.findOne({ _id: context.user._id }).select('-__v -password');
              return data;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);
            return { token, user };
        },

        addCookie: async (parent, { addToCart }, context) => {
            if (context.user) {
                const userCart = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { cookiesInCart: addToCart.cookieId }},
                    { new: true }
                );
                return userCart;
            }
        },

        deleteCookie: async (parent, { cookieId }, context) => {
            if (context.user) {
                const userCart = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { addCookie: { cookieId: cookieId }}},
                    { new: true }
                )
                return userCart;
            }
        }
    }
};

module.exports = resolvers;