const typeDefs = `
    type Query {
        me: User
    }

    type Mutation {
        addUser(email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCookie2Cart(): User
        returnCookieFromCart(): User
    }

    type CookieInventory {
        cookieId: ID
        cookieName: String
        description: String
        image: String
        link: String
    }

    type User {
        _id: String
        username: String
        email: String
        cookiesCart(newCookie: CookieInventory): [String]
        removeCookies(returnCookie: CookieInventory)
    }

    type Cookies {
        cookieId: String
        cookieName: String
        description: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;