const { User, Cookies } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// May not use this
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, {profileId}) => {
            return User.findOne({ _id: profileId });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
    },

    Mutations: {

    }
};

module.exports = resolvers;