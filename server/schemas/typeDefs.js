const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        cartTotal: Int
        addCookie: [Cookies]
    }

    type Query {
        users: [User]
        user(accountId: ID!): User
        me: User
    }

    input BuyCookie {
        cookieId: String
        cookieName: String
        description: String
        image: String
        price: Float
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCookie(addToCart: BuyCookie!): User
        deleteCookie(cookieId: ID!): User
    }

    type Cookies {
        _id: ID
        cookieId: String
        cookieName: String
        description: String
        image: String
        price: Float
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;