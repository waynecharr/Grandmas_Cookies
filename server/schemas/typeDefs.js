const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        cookiesInCart: [ID]
    }

    type Query {
        users: [User]
        user(accountId: ID!): User
        me: User
    }

    input addCookieToCart {
        user: ID
        cookieId: ID
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

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCookie(addToCart: addCookieToCart!): User
        deleteCookie(cookieId: ID!): User
    }
`;

module.exports = typeDefs;