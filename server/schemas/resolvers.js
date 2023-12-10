const { User, Cookies } = require('../models');
const { signToken } = require('../utils/auth');
// May not use this
const { AuthenticationError } = require('apollo-server-express');

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
        addUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);

            return { token, account };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!account) {
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
                    { $push: { addCookie: addToCart }},
                    { new: true }
                )
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